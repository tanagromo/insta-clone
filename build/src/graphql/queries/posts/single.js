'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _posts = require('../../../models/posts');

var _posts2 = _interopRequireDefault(_posts);

var _posts3 = require('../../types/posts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySinglePost = {

    type: _posts3.PostType,
    args: {
        id: { //**id
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)

        }
    },
    resolve: function resolve(root, params) {
        //root es el request
        var post = _posts2.default.findById(params.id).exec(); //**id 
        return post;
    }
};
exports.default = querySinglePost;