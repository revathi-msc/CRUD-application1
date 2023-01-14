const mongoose = require('mongoose');
const schema = mongoose.Schema;


const userSchema = new schema({
    username : {type: String,required:true,unique:true,minlenght:3},
    password : {type: String,required:true,minlenght:3},
},{
    timestamps : true
});

const Users = mongoose.model('Users',userSchema);

module.exports = Users;