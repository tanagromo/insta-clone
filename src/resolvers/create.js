import jwt from 'jsonwebtoken';
import User from '../models/users';

const expiresIn = "1d";
const secret = "samplejwtinstagram";
const tokenPrefix = "JWT";

export const createToken = (email,password) =>{

    if(!email || !password){ //si no hay credenciales
        return false
    }

    const user = User.findOne({'email':email}).then((user)=>{ //busca un email y me regresa un user
        const compare = new Promise((resolve,reject)=>{
            user.comparePassword(password,(err,isMatch)=>{
                if(isMatch){
                    let payload = {
                        email:user.email,
                        fullname:`${user.name} ${user.lastname}`,
                        id:user._id
                    }

                    const token = jwt.sign(payload,secret,{expiresIn});//este es el token

                    resolve(token)
                }else{
                    reject(false)
                }
            })

        })
        return compare

    }).catch((err)=>{
        return err
    });

    return user
    
}