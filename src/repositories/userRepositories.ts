import { QueryResult } from "pg"
import connectionDb from "../config/database.js"

async function FindByEmail(email:string): Promise<QueryResult<any>>{

    return await connectionDb.query(
    `
        SELECT u.id,u.name,u.password,u.email
        FROM users u
        WHERE email=$1
    `,[email])
}

async function CreateUser(name,email,hashpassword): Promise<QueryResult<any>>{

    return await connectionDb.query(
    `
        INSERT INTO users
            (name,email,password)
        VALUES ($1,$2,$3)
    `,[name,email,hashpassword])
}

export default {
    FindByEmail,
    CreateUser,
}