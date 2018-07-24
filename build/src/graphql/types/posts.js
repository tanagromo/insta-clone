'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostInputType = exports.PostType = undefined;

var _graphql = require('graphql');

var _users = require('./users');

var _posts = require('../../models/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); } //types:sirve para hacer queries y mutations, hay para lectura y escritura

//creo un nuevo objeto
var PostType = exports.PostType = new _graphql.GraphQLObjectType({
    name: "ListPosts",
    description: "Lista Posts de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            location: {
                type: _graphql.GraphQLString
            },
            like: {
                type: _graphql.GraphQLBoolean
            },
            photo: {
                type: _graphql.GraphQLString
            },
            user: {
                type: _users.UserType,
                resolve: function resolve(user) {
                    _objectDestructuringEmpty(user);

                    return _users.UserType.fin;
                }
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            },
            upload_at: {
                type: _graphql.GraphQLString
            }
        };
    }
});
//escritura
var PostInputType = exports.PostInputType = new _graphql.GraphQLInputObjectType({
    name: "AddPhotos",
    description: "Agrega, modifica nuevas Fotos de la BD",
    fields: function fields() {
        return {

            location: {
                type: _graphql.GraphQLString
            },
            like: {
                type: _graphql.GraphQLBoolean
            },
            photo: {
                type: _graphql.GraphQLString
            }

        };
    }

});