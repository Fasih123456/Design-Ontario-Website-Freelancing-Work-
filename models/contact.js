const mongoose = require('mongoose');

const Contact = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    quote: {type: String},
},
{collection: 'contact-data'}
)

const model = mongoose.model('ContactData', Contact);

module.exports = model