const express = require('express');

const Router = express.Router();

Router.get('/', function (req, res) {
    res.json({message: 'Welcome to the react + express + mongoDB'});
});

module.exports = Router;
