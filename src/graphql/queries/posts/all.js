import { GraphQLList } from 'graphql';
import Post from '../../../models/posts';
import {PostType} from '../../types/posts';

const queryAllPosts = {
    type: new GraphQLList(PostType),
    resolve(){
        const post = Post.find().exec() //query que trae objetos de mongo
        if(!post) throw new Error ("Error al traer de la bd");
        return post
    }
}

export default queryAllPosts;