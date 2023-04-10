import { Router } from "express"
import { getAllChars,getChar,createChar,updateChar,deleteChar } from "../controller/charController.js"

const charRouter = Router()

charRouter.get("/allchars",getAllChars)
charRouter.get("/char/:id",getChar)
charRouter.post("/char/createchar",createChar)
charRouter.put("/char/:id/updatechar",updateChar)
charRouter.delete("/char/:id/deletechar",deleteChar)

export default charRouter