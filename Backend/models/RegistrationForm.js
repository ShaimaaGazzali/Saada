var mongoose = require('mongoose');

var RegistrationFormSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String
}, { timestamps: true });

RegistrationFormSchema.methods.toJSON = function () {
  return {
    title: this.title,
    description: this.description,
    body: this.body
  };
};


mongoose.model('RegistrationForm', RegistrationFormSchema);
