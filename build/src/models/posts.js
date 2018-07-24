'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT_WORK_FACTOR = 10;

var Schema = _mongoose2.default.Schema;

var PostSchema = new Schema({
    "location": {
        type: String,
        required: false
    },
    "like": {
        type: Boolean,
        default: false
    },
    "likes": {
        type: [Number],
        default: 0 //array de personas que dieron like gg
    },
    "photo": {
        type: String
    },
    "user": {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    "upload_at": {
        type: Date,
        default: new Date() //Fecha de hoy
    }
}, { collection: "Posts", timestamps: true }); // para saber el moment en el que se modifico algo

exports.default = _mongoose2.default.model('Posts', PostSchema);