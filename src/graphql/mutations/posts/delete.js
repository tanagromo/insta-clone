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
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deletePost = Post.findByIdAndRemove(params.id).exec()
        if(!deletePost) throw new Error("Error al borrar Post");
        return deletePost
    }
}