import { Router } from "express"
import { getAllChars,getChar,createChar,updateChar,deleteChar } from "../controller/charController.js"
import {authValidation} from "../middleware/authMiddleware.js"

const charRouter = Router()

charRouter.get("/allChars",getAllChars)
charRouter.get("/char/:id",getChar)
charRouter.post("/char/createChar",authValidation,createChar)
charRouter.put("/char/:id/updateChar",authValidation,updateChar)
charRouter.delete("/char/:id/deleteChar",authValidation,deleteChar)

export default charRouter