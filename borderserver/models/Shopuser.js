const mongoose = require('mongoose');

const Shopuserobj = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    phone :{
        type : Number,
        required : true
    }
    ,
    email :{
        type : String,
        required : true
    },
    password :{
        type:String,
        required:true
    }
    ,
    address :{
        type : String,
        required : true
    },
    state:{
        type : String,
        required : true
    },
    city:{
        type : String,
        required : true
    },
    pincode:{
        type : Number,
        rewuired : true
    },
    date:{
        type: Date,
        default: Date.now
    } 
})


module.exports = shopuser = mongoose.model('shopuser',Shopuserobj);