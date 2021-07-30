var mongoose = require('mongoose');

var RegistrationFormSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  neighborhood: String,
  otherNeighborhood: String,
  Address: String,
  level: String,
  school: String,
  email: String,
  comment: String,

}, { timestamps: true });

RegistrationFormSchema.methods.toJSON = function () {
  return {
    title: this.title,
    description: this.description,
    body: this.body
  };
};


mongoose.model('RegistrationForm', RegistrationFormSchema);
