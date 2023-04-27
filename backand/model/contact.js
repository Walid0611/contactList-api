const mongoose = require('mongoose');

const contactschema = mongoose.Schema({
    name:String,
    LastName:String,
    age:Number,
    email:{
        type:String,
        required:true,
        
    }
})

module.exports = mongoose.model('Contactschema',contactschema)