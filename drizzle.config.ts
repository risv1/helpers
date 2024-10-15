import { defineConfig, type Config } from "drizzle-kit";
import { dbUrl } from "./env";

export default defineConfig({
    out: '.drizzle',
    schema: 'app/server/database/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: dbUrl
    }
});