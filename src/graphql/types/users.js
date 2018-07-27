//types:sirve para hacer queries y mutations, hay para lectura y escritura

import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import {PostType} from './posts';
import User from '../../models/users';
import Post from '../../models/posts';

//creo un nuevo objeto
export const UserType = new GraphQLObjectType({
    name:"ListUsers",
    description:"Lista Usuarios de la BD",
    fields: () =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        },
        friends:{
            type: new GraphQLList(UserType),
            resolve(user){ 
                const {_id} = user
                let allfr = User.findById(_id).then((user)=>{
                    return User.find({'_id':{$in:user.friends}}).exec()
                })
                console.log(allfr)
                return allfr

            }
        },
        create_at:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean
        }
    })
});
//escritura
export const UserInputType = new GraphQLInputObjectType({
    name:"AddUsers",
    description:"Agrega, modifica nuevos Usuarios de la BD",
    fields: () =>({
        
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        password:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        }
        
    })


})

export const PostUserType = new GraphQLInputObjectType({
    name:"addPost",
    description:"Agrega post a User",
    fields:() =>({
        photo:{
            type:GraphQLString
        }
    })
});


export const FollowType = new GraphQLInputObjectType({
    name:"addFriend",
    description:"Agrega Amigo a User",
    fields:() =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        }
    })
});