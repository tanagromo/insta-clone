import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'
import User from '../../../models/users';
import {FollowType,UserType} from '../../types/users';

export default {

    type:UserType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type:new GraphQLNonNull(PostUserType)
        }
    },resolve(root,params){
        const {id,data} = params
        return User.findByIdAndUpdate(id,{$push:{friends:data.friends}})
        .then((user)=>{
            return User.findById(user.id).exec()
        })
    }


}