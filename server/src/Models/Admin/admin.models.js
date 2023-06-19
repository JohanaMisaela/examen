const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nom: String,
    prix : String,
    description: String,
    origine: String,
    image: String
}, {timestamps: true})




module.exports = mongoose.model('users', UserSchema)
