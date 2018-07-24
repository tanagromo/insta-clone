import {GraphQLNonNull, GraphQLID} from 'graphql';
import User from '../../../models/users';
import {UserType} from '../../types/users';

const querySingleUser = {

    type:UserType,
    args:{
        id:{ //**id
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },
    resolve(root,params){ //root es el request
        const user = User.findById(params.id).exec() //**id 
        return user
    }

}
export default querySingleUser;