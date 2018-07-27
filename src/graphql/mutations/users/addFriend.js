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
            type:new GraphQLNonNull(FollowType)
        }
    },resolve(root,params){
        const {id,data} = params
        console.log(params)
        return User.findByIdAndUpdate(id,{$push:{friends:data._id}})
        .then((user)=>{
            console.log(user)
            return User.findById(user.id).exec()
        })
    }

    /*resolve(user){
        const {_id} = user
        console.log(user)
        return User.findById(_id).populate('friends').then().catch()
    }*/


}