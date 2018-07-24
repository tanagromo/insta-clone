import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const Schema = mongoose.Schema

const PostSchema = new Schema({
    "location":{
        type:String,
        required:false
    },
    "likes":{
        type:[Number]
    },
    "photo":{
        type:String
    },
    "author":{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    "upload_at":{
        type:Date,
        default:new Date() //Fecha de hoy
    },
    },{collection:"Posts",timestamps:true}); // para saber el moment en el que se modifico algo

    export default mongoose.model('Posts', PostSchema);