'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./src/models/users');

var _users2 = _interopRequireDefault(_users);

var _create = require('./src/resolvers/create');

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//variable de entorno
var PORT = process.env.PORT || 4000;

_mongoose2.default.connect('mongodb://admin:admin123@ds127811.mlab.com:27811/instagram-dev', { useNewUrlParser: true });
var db = _mongoose2.default.connection;
db.on('error', function () {
    return console.log("Error al conectar a la BD");
}).once('open', function () {
    return console.log("Conectado a la BD");
});

app.use(_bodyParser2.default.json());

app.post('/signup', function (req, res) {
    var user = req.body;
    _users2.default.create(user).then(function (user) {
        return res.status(201).json({ "message": "Usuario Creado",
            "id": user._id });
    }).catch(function (err) {
        console.log(err);
        return res.json(err);
    });
});

app.post('/login', function (req, res) {
    var token = (0, _create.createToken)(req.body.email, req.body.password).then(function (token) {
        res.status(201).json({ token: token });
    }).catch(function () {
        res.status(403).json({
            message: "Login Failed!! :( Invalid credentials"
        });
    });
});

app.get('/', function (req, res) {
    //req = request
    //res = response
    res.send("Estoy funcionando...");
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true, //graphi: cliente de graphql
        pretty: true
    };
}));

app.listen(PORT, function () {
    console.log("Magic Happens in port: " + PORT);
});