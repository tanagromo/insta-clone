import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'
import Posts from '../../../models/posts';
import {PostInputType,PostType} from '../../types/posts';

export default {

    type:PostType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type: new GraphQLNonNull(PostInputType)
        }
    },
    resolve(root,params){
        return Post.findByIdAndUpdate(params.id,
            {$set:{...params.data}}
        ).then((post)=>{
            return post
        }).catch((err)=>{
            throw new Error("Error al hacer update")
        })
    }

}