import { Router } from "express";
import userRouter from "./userRouter.js";
import charRouter from "./charRouter.js";
var routes = Router();
routes.use(userRouter);
routes.use(charRouter);
export default routes;
