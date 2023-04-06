import { Router } from "express"
import {login,signup} from "../controller/userController.js"
import { validateSchema } from "../middleware/schemaValidationMiddleware.js"
import { signUpSchema } from "../schema/userSchema.js"

const userRouter = Router()

userRouter.post("/signin",login)
userRouter.post("/signup",validateSchema(signUpSchema),signup)

export default userRouter