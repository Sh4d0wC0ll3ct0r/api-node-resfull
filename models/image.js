'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSChema = Schema({
    title : String,
    picture: String,
    album : { type: Schema.Types.ObjectId , ref: 'Album' }

});

module.exports = mongoose.model('Image', ImageSChema);