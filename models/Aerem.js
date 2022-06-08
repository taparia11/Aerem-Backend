const mongoose = require('mongoose');
const { Schema } = mongoose;

const Aerem = new Schema({

name:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
phone:{
    type: String,
    required: true
},

message:{
    type: String,
    required: true
},

tag:{
    type: String,
    default: 'Aerem'
},

date:{
    type: Date, 
    default:Date.now
}

});

module.exports = mongoose.model('aerem', Aerem)