import { Router } from "express"
import { getAllChars,getChar,createChar,updateChar,deleteChar } from "../controller/charController.js"
import {authValidation} from "../middleware/authMiddleware.js"

const charRouter = Router()

charRouter.get("/allchars",getAllChars)
charRouter.get("/char/:id",getChar)
charRouter.post("/char/createchar",authValidation,createChar)
charRouter.put("/char/:id/updatechar",authValidation,updateChar)
charRouter.delete("/char/:id/deletechar",authValidation,deleteChar)

export default charRouter