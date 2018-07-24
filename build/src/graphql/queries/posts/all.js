'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _posts = require('../../../models/posts');

var _posts2 = _interopRequireDefault(_posts);

var _posts3 = require('../../types/posts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllPosts = {
    type: new _graphql.GraphQLList(_posts3.PostType),
    resolve: function resolve() {
        var post = _posts2.default.find().exec(); //query que trae objetos de mongo
        if (!post) throw new Error("Error al traer de la bd");
        return post;
    }
};

exports.default = queryAllPosts;