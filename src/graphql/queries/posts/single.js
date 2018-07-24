import {GraphQLNonNull, GraphQLID} from 'graphql';
import Post from '../../../models/posts';
import {PostType} from '../../types/posts';

const querySinglePost = {

    type:PostType,
    args:{
        id:{ //**id
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },
    resolve(root,params){ //root es el request
        const post = Post.findById(params.id).exec() //**id 
        return post
    }

}
export default querySinglePost;