'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require('graphql');

var _posts = require('./posts');

//creo un nuevo objeto
//types:sirve para hacer queries y mutations, hay para lectura y escritura

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
    name: "ListUsers",
    description: "Lista Usuarios de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            lastname: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            photo: {
                type: _graphql.GraphQLString
            },
            friends: {
                type: UserType,
                resolve: function resolve(user) {
                    var friend = user.friend;

                    return User.findById(friend).exec();
                }
            },
            posts: {
                type: _posts.PostType,
                resolve: function resolve(user) {
                    var posts = user.posts;

                    return _posts.PostType.findById(posts).exec();
                }
            },
            create_at: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});
//escritura
var UserInputType = exports.UserInputType = new _graphql.GraphQLInputObjectType({
    name: "AddUsers",
    description: "Agrega, modifica nuevos Usuarios de la BD",
    fields: function fields() {
        return {

            name: {
                type: _graphql.GraphQLString
            },
            lastname: {
                type: _graphql.GraphQLString
            },
            password: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            photo: {
                type: _graphql.GraphQLString
            }

        };
    }

});