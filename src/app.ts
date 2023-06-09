import express,{json}  from "express";
import cors from "cors"
import routes from "./routes/index.js";
import { handleAppErrors } from "./middleware/errorMiddleware.js";

const server = express()

server.use(cors());
server.use(json());
server.use(routes)
server.use(handleAppErrors)


const port = 5000;
server.listen(port,()=>{console.log(`Server is running at port: ${port}`)});