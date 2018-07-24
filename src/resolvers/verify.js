import User from '../models/users';
import jwt from 'jsonwebtoken';
import { compareSync } from 'bcrypt/bcrypt';

//estas deberian ser variables de entorno
const expiresIn = "1d";
const secret = "samplejwtinstagram";
const tokenPrefix = "JWT";

export const verifyToken = (token) =>{ //export es para mandarlo a otro lado **

    try{
        const [prefix,recivedToken] = token.split(' ');
        let user = null;
        if(!recivedToken){
            throw new Error('no token provided');

        }
        if (prefix != tokenPrefix){
            throw new Error('Invalid header format');
        }

        jwt.verify(recivedToken,secret,(err,payload)=>{
            if(err) {throw new Error('Invalid token')}
            else{
                user = User.findById(payload.id).exec() //exec() **
            }
        })

        if(!user) {throw new Error("User doesn't exist")}
        return user
    }catch(err){

        throw Error("Error inesperado");

    }
}