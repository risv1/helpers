import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { dbUrl } from "../../../env"

const client = postgres(dbUrl)
export const db = drizzle(client)