var router = require('express').Router();
var mongoose = require('mongoose');
var paymentForms = mongoose.model('PaymentForm');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const AWS = require('aws-sdk');
var auth = require('../auth');
var mongodb = require('mongodb');
var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');
var url = require('url');
var querystring = require('querystring');

const BucketName = "saada-files";

let space = new AWS.S3({
  endpoint: "fra1.digitaloceanspaces.com",
  useAccelerateEndpoint: false,
  credentials: new AWS.Credentials("Q6VOYRK6N2LLCLPEWGJG", "OOed+BOL9ivMPOvgoCgwwbO0DFsL2M3RgiFtH7dqT2o", null)
});

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}


router.post('/', auth.optional, function (req, res, next) {
  const query = url.parse(req.url, true).query; 
  var form = new paymentForms(req.body);
  form.paymentReceipt = query.url;
  form.save().then(function () {
    return res.json({ data: form.toJSON() });
  }).catch(next);
});

/* Upload file */
router.post('/upload', upload.single('image'), function (req, res, next) {
  let key = makeid(15) + req.file.originalname;
  console.log(req.file)
  let uploadParameters = {
    Bucket: BucketName,
    ContentType: req.query.content_type,
    Body: req.file.buffer,
    ACL: 'public-read',
    Key: key
  };

  space.upload(uploadParameters, function (error, data) {
    if (error) {
      console.error(error);

      res.sendStatus(500);
      return;
    }
    return res.json({
      'key': key
    })
  });
});

module.exports = router;
