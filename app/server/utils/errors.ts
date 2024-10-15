type ErrorRes = {
    message: string,
    prettyMessage: string,
    status: number
}

const ERR_MISSING_FIELDS: ErrorRes = {
    message: "Missing required fields",
    prettyMessage: "The request is missing required fields",
    status: 400
}

const ERR_USER_NOT_FOUND: ErrorRes = {
    message: "User not found",
    prettyMessage: "The user was not found",
    status: 404
}

const ERR_WRONG_CREDENTIALS: ErrorRes = {
    message: "Wrong credentials",
    prettyMessage: "The provided credentials are incorrect",
    status: 401
}

const ERR_NOT_FOUND: ErrorRes = {
    message: "Not found",
    prettyMessage: "The requested resource was not found",
    status: 404
}

const ERR_BAD_REQUEST: ErrorRes = {
    message: "Bad request",
    prettyMessage: "The request was malformed",
    status: 400
}

const ERR_UNAUTHORIZED: ErrorRes = {
    message: "Unauthorized",
    prettyMessage: "You are not authorized to access this resource",
    status: 401
}

const ERR_FORBIDDEN: ErrorRes = {
    message: "Forbidden",
    prettyMessage: "You are not allowed to access this resource",
    status: 403
}

const ERR_INTERNAL_SERVER: ErrorRes = {
    message: "Internal server error",
    prettyMessage: "An unexpected error occurred",
    status: 500
}

export const errors = {
    ERR_MISSING_FIELDS,
    ERR_USER_NOT_FOUND,
    ERR_WRONG_CREDENTIALS,
    ERR_NOT_FOUND,
    ERR_BAD_REQUEST,
    ERR_UNAUTHORIZED,
    ERR_FORBIDDEN,
    ERR_INTERNAL_SERVER
}


