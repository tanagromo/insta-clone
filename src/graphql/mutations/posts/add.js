import {
    GraphQLNonNull
} from 'graphql'
import Post from '../../../models/posts';
import {PostInputType,PostType} from '../../types/posts';

export default {
    type: PostType,
    args:{
        data:{
            type: new GraphQLNonNull(PostInputType)
        }
    },
    resolve(root,params){
        const post = new Post(params.data)
        const newPost = post.save();
        if(!newPost) throw new Error("Error al crear Post");
        return newPost
    }
}