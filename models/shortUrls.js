const mongoose = require('mongoose')
const shortid = require('shortid')


//Schema to run after a URL is submitted 
const shortURLSchema = new mongoose.Schema({
    full: {
        type: String,
        required : true
    },
    short: {
        type: String,
        required: true,
        default: shortid.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
}) 


module.exports = mongoose.model('ShortURL', shortURLSchema)