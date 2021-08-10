var router = require('express').Router();
var mongoose = require('mongoose'); 
var paymentForms = mongoose.model('PaymentForm');

var auth = require('../auth');
   
router.post('/', auth.optional, function(req, res, next) {
     var form = new paymentForm(req.body);
     form.save().then(function(){
          return res.json({user: form.toJSON()});
     }).catch(next);
});   


module.exports = router;
