import { setResponseStatus } from "h3";

export const healthHandler = async (event) => {
    setResponseStatus(event, 200);
    return { message: "We're healthy!" }
}