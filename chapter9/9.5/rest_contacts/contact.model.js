const mongoose = require('mongoose');

var ContactSchema = mongoose.Schema({   //스키마(Schema) 설정
  contactId: {type: Number, require:true},
  name: { type: String, require: true},
  email: { type: String, require: true},
  gender: String,
  phone: String,
  register_date: { type: Date, default:Date.now}
})

module.exports = mongoose.model('Contact', ContactSchema); 
