//types:sirve para hacer queries y mutations, hay para lectura y escritura

import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLFloat,
    GraphQLList
} from 'graphql'

import {UserType} from './users';
import Posts from '../../models/posts';
import User from '../../models/users';

//creo un nuevo objeto
export const PostType = new GraphQLObjectType({
    name:"ListPosts",
    description:"Lista Posts de la BD",
    fields: () =>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        location:{
            type:GraphQLString
        },
        likes:{
            type:GraphQLList(GraphQLFloat)
        },
        photo:{
            type:GraphQLString
        },
        author:{
            type:UserType,
            resolve(user){
                const {author} = user
                return User.findById(author).exec()
            }
        },
        is_active:{
            type:GraphQLBoolean
        },
        upload_at:{
            type:GraphQLString
        },
    })
});
//escritura
export const PostInputType = new GraphQLInputObjectType({
    name:"AddPhotos",
    description:"Agrega, modifica nuevas Fotos de la BD",
    fields: () =>({
        
        location:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        },
        author:{
            type:GraphQLString
        }
        
    })

})