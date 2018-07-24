import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema

const LikeSchema = new Schema({
    "author":{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    "photo":{
        type:Schema.Types.ObjectId,
        ref:'Post'
    }
})