import errors from "../errors/index.js";
import { CharPoints, NewChar } from "../protocols/char.js"
import charRepositories from "../repositories/charRepositories.js"

async function getAll(){

    const chars = await charRepositories.getAll()
    return chars.rows
}

async function getChar(id:number){

    const char = await charRepositories.findCharById(id)
    return char.rows[0]
}

async function createNewChar(char: NewChar){

    const charExist = await charRepositories.findByNickname(char.nickname);
    if(charExist.rowCount) throw errors.ConflictError();

    await charRepositories.createChar(char)    
}


async function updatePoints(id:number,points: CharPoints){

    const charExist = await charRepositories.findCharById(id);
    if(!charExist) throw errors.notFoundError();

    await charRepositories.updateChar(id,points);
}

async function deleteChar(id: number){
    
    const charExist = await charRepositories.findCharById(id);
    if(!charExist) throw errors.notFoundError();

    await charRepositories.deleteChar(id);
}

export default {
    getAll,
    getChar,
    createNewChar,
    updatePoints,
    deleteChar
}