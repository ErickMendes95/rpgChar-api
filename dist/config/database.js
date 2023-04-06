import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
var Pool = pg.Pool;
var connectionDb = new Pool({
    connectionString: process.env.DATABASE_URL,
});
export default connectionDb;
