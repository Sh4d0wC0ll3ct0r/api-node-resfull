'use strict'
var  express = require('express');
var bodyParser =  require('body-parser');
var app=express();

var album_routes = require("./routes/album");
var image_routes = require("./routes/image");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Allow', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
});

app.use('/api',album_routes);
app.use('/api',image_routes);

module.exports = app;
