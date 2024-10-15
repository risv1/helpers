import { readBody, setCookie, setResponseStatus } from "h3"
import { v4 as uuidv4 } from "uuid"
import { errors } from "../../utils/errors"
import { hashPassword, verifyPassword } from "../../utils/hash"
import { generateToken } from "../../utils/jwt"
import { db } from "../../database/db"
import { users } from "../../database/schema"
import { eq } from "drizzle-orm"

export const signupHandler = async (event) => {
    const body = await readBody(event)
    if (!body.name || !body.email || !body.password) {
        setResponseStatus(event, 400)
        return { error: errors.ERR_MISSING_FIELDS }
    }

    const id = uuidv4()

    const hashedPassword = await hashPassword(body.password)

    const user = {
        id,
        name: body.name,
        email: body.email,
        password: hashedPassword,
    }

    try {
        await db.insert(users).values(user)
        setResponseStatus(event, 201)
        return { message: "User created successfully" }
    } catch (e) {
        setResponseStatus(event, 500)
        return { error: errors.ERR_INTERNAL_SERVER }
    }
}

export const loginHandler = async (event) => {
    const body = await readBody(event)
    if (!body.email || !body.password) {
        setResponseStatus(event, 400)
        return { error: errors.ERR_MISSING_FIELDS }
    }

    const [user] = await db.select().from(users).where(eq(users.email, body.email))
    if (!user) {
        setResponseStatus(event, 401)
        return { error: errors.ERR_USER_NOT_FOUND }
    }

    const verifyPass = await verifyPassword(body.password, user.password)
    if (!verifyPass) {
        setResponseStatus(event, 401)
        return { error: errors.ERR_WRONG_CREDENTIALS }
    }

    const token = await generateToken(user.id)

    setCookie(event, "token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 3600,
    })

    setResponseStatus(event, 200)
    return { message: "Login successful" }
}
