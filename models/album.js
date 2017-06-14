'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSChema = Schema({
    title : String,
    description: String
});

module.exports = mongoose.model('Album', AlbumSChema);