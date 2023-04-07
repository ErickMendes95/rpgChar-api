import userRepositories from "../repositories/userRepositories.js"
import bcrypt from "bcrypt"
import errors from "../errors/index.js"
import jwt from "jsonwebtoken"
import { SignIn, SignUp } from "../protocols/user.js"

async function signin(user: SignIn){
    
    const userExist = await userRepositories.FindByEmail(user.email)
    if(!userExist) throw errors.notFoundError();

    const validPassword = await bcrypt.compare(user.password,userExist.rows[0].password)
    if(!validPassword) throw errors.invalidCredentialsError();

    const userId = userExist.rows[0].id
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn: 86400});
    
    return token;

}

async function signup(user: SignUp) {

    const userExist = await userRepositories.FindByEmail(user.email)
    if(userExist.rowCount) throw errors.duplicatedEmailError()

    const hashPassword = await bcrypt.hash(user.password,10);
    await userRepositories.CreateUser(user.name,user.email,hashPassword)
}

export default {
    signin,
    signup
}