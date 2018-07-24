'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _queries = require('./queries');

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import mutations from './mutations';

exports.default = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
        name: 'Query',
        fields: _queries2.default
    })
});