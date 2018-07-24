import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import User from './src/models/users';
import Posts from './src/models/posts';
import {createToken} from './src/resolvers/create';
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';
import {verifyToken} from './src/resolvers/verify';



const app = express();
//variable de entorno
const PORT = process.env.PORT || 4000

mongoose.connect('mongodb://admin:admin123@ds127811.mlab.com:27811/instagram-dev',{ useNewUrlParser: true })
const db = mongoose.connection;
db.on('error',()=>console.log("Error al conectar a la BD"))
    .once('open',()=>console.log("Conectado a la BD"))

app.use(bodyParser.json());

app.use(cors()); //se especifica la lista negra y blanca


app.post('/signup',(req,res)=>{
    let user = req.body
    User.create(user).then((user)=>{
        return res.status(201).json({"message":"Usuario Creado",
        "id":user._id})
    }).catch((err)=>{
        console.log(err);
        return res.json(err)
    })
});

app.post('/login', (req,res)=>{
    const token = createToken(req.body.email,req.body.password).then((token)=>{
        res.status(201).json({token});
    }).catch(()=>{
        res.status(403).json({
            message:"Login Failed!! :( Invalid credentials"
        })
    })
})

app.get('/',(req,res) => {
    //req = request
    //res = response
    res.send("Estoy funcionando...");
})

app.use('/graphql',graphQLHTTP((req,res)=>({
    schema,
    graphiql:true, //graphi: cliente de graphql
    pretty:true
})))

app.listen(PORT,() => {
    console.log("Magic Happens in port: "+PORT)
})