import { Router } from "express";
import userRouter from "./userRouter";
import charRouter from "./charRouter";

const routes = Router()

routes.use(userRouter)
routes.use(charRouter)

export default routes