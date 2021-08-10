var mongoose = require('mongoose');

var PaymentFormSchema = new mongoose.Schema({
  email: String,
  paymentReceipt: String,
  name: String,
  nationalId: String,
  age: String,
  mobile: String,
  extraMobile: String,
  landLine: String,
  relativeName: String,
  relativeRelation: String,
  relativeMobile: String,
  neighborhood: String,
  otherNeighborhood: String,
  Address: String,
  location: String,
  addressDescription: String,
  level: String,
  school: String,
  otherSchool: String,
  schoolTime: String,
  startDate:String,
  schedule:String,

}, { timestamps: true });

PaymentFormSchema.methods.toJSON = function () {
  return {
    title: this.title,
    description: this.description,
    body: this.body
  };
};


mongoose.model('PaymentForm', PaymentFormSchema);
