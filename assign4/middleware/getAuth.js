import { MyError } from "./ErrorHandler.js";
import jwt from 'jsonwebtoken'

const JWT_SECRET = "JWT_SECRET"

export const getAuth = async(req, res, next) =>{

    const authHeader = req.header('Authorization');
    console.log(authHeader)
    if(!authHeader){
        console.log("Auth  missing")
        return next(new MyError('No Auth Provided',401));
    }

    const token = authHeader.replace('Bearer ', '');
    if(!token){
        return next(new MyError('No Token Provided',401))
    }

    try{
        const decodedPass = jwt.verify(token, JWT_SECRET);
        req.userId = decodedPass.userId;
        next()
    }catch(err){
        console.log(err)
        next(new MyError('Invalid Token',401))
    }
}
