const {Mongoose} = require("mongoose");

const UserSchema = new Mongoose.Schema({
    id : { type: Object},
    username : { type: String, required: true, unique: true},
    email : { type: String, required: true},
    password : { type: String, required: true},
});