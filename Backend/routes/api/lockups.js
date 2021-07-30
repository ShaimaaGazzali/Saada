var router = require('express').Router();


// router.get('/', auth.optional, function(req, res, next) {
//      var form = new registrationForm(req.body);
//      form.save().then(function(){
//           return res.json({user: form.toJSON()});
//      }).catch(next);
// });   

router.get('/neighborhoods', function (req, res) {
  let neighborhoods = ['Apple', 'Banana']

  res.send(neighborhoods);
})

router.get('/schools', function (req, res) {
  let schools = ['Apple', 'Banana']

  res.send(schools);
})

router.get('/colleagues', function (req, res) {
  let schools = ['Apple', 'Banana']

  res.send(schools);
})


module.exports = router;
