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
  schedule:String
}, { timestamps: true });

PaymentFormSchema.methods.toJSON = function () {
  return {
    title: this.title,
    description: this.description,
    email: this.email,
    paymentReceipt: this.paymentReceipt,
    name: this.name,
    nationalId: this.nationalId,
    age: this.age,
    mobile: this.mobile,
    extraMobile: this.extraMobile,
    landLine: this.landLine,
    relativeName: this.relativeName,
    relativeRelation: this.relativeRelation,
    relativeMobile: this.relativeMobile,
    neighborhood: this.neighborhood,
    otherNeighborhood: this.otherNeighborhood,
    Address: this.Address,
    location: this.location,
    addressDescription: this.addressDescription,
    level: this.level,
    school: this.school,
    otherSchool: this.otherSchool,
    schoolTime: this.schoolTime,
    startDate:this.startDate,
    schedule:this.schedule,
  };
};


mongoose.model('PaymentForm', PaymentFormSchema);
