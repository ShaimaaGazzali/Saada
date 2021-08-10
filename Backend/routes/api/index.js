var router = require('express').Router();
 
router.use('/registrationForms', require('./registrationForms'));
router.use('/paymentForms', require('./paymentForms'));
router.use('/lockups', require('./lockups'));

router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;