import { QueryResult } from "pg"
import connectionDb from "../config/database.js"
import { CharPoints, NewChar } from "../protocols/char.js"

async function getAll(): Promise<QueryResult<any>>{
    return await connectionDb.query(
        `
        SELECT * FROM chars;
        `
    )
}

async function findByNickname(nickname:string): Promise<QueryResult<any>>{
    return await connectionDb.query(
        `
        SELECT * FROM chars where nickname=$1;
        `
    ,[nickname])
}

async function findCharById(id:number): Promise<QueryResult<any>>{
    return await connectionDb.query(
        `
        SELECT * FROM chars where id=$1;
        `
    ,[id])
}

async function createChar(char: NewChar): Promise<QueryResult<any>>{
    return await connectionDb.query(
        `
        INSERT INTO chars 
            (nickname,race,perks,strenght,vitality,intelligence)
        VALUES ($1,$2,$3,$4,$5,$6)
        `
    ,[char.nickname,char.race,char.perks,char.strenght,char.vitality,char.intelligence]
    )
}

async function updateChar(id:number,points: CharPoints): Promise<QueryResult<any>>{
    return await connectionDb.query(
        `
        UPDATE chars
        set strenght=$1, vitality=$2, intelligence=$3
        WHERE id=$4
        `
    ,[
        points.strenght,
        points.vitality,
        points.intelligence,
        id
    ])
}

async function deleteChar(id:number): Promise<QueryResult<any>>{
    return await connectionDb.query(
        `
        DELETE FROM chars
        WHERE id=$1
        `
    ,[id])
}

export default {
    getAll,
    findByNickname,
    findCharById,
    createChar,
    updateChar,
    deleteChar,
}