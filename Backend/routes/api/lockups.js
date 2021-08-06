var router = require('express').Router();
var url = require('url');
var querystring = require('querystring');


let neighborhoods =
[{ name: "الربوة", value: 1 },
{ name: "المروة", value: 2 },
{ name: "الوزيرية", value: 3 },
{ name: "السنابل", value: 4 },
{ name: "الصفا", value: 5 }];

router.get('/neighborhoods', function (req, res) {
  res.send(neighborhoods);
})

router.get('/schools', function (req, res) {
  const query = url.parse(req.url, true).query; 
  if (query.level == 1 && query.neighborhood == 1) {
    let data = ['جامعة الملك عبدالعزيز(بحي السليمانية)', 'جامعة جدة (بحي الفيصلية)']
    res.send(data);
    return
  }

  if (query.level == '2' && query.neighborhood == '1') {
    res.send();
    return
  }

  if (query.level == '1' && query.neighborhood == '2') {
    let data = ['جامعة الملك عبدالعزيز(بحي السليمانية)', 'جامعة جدة (بحي الفيصلية)']
    res.send(data);
    return
  }
  if (query.level == '2' && query.neighborhood == '2') {
    res.send();
    return
  }

  if (query.level == '1' && query.neighborhood == '3') {
    let data = ['جامعة الملك عبدالعزيز(بحي السليمانية)', 'جامعة جدة (بحي الفيصلية)']
    res.send(data);
    return
  }
  if (query.level == '2' && query.neighborhood == '3') {
    let data = ['البراء بن مالك', 'متوسطة ربعي', 'متوسطة  ابن عاصر', 'إبتدائية ومتوسطة الشاطئ', 'المدرسة 20 صباحي ومسائي ', 'المدرسة 26 متوسط ', 'ثانوية 96', 'ابتدائي 198 ', 'متوسطة 90 ', 'ثانوية 73 ']
    res.send(data);
    return
  }

  if (query.level == '1' && query.neighborhood == '4') {
    let data = ['جامعة الملك عبدالعزيز(بحي السليمانية)', 'جامعة جدة (بحي الفيصلية)']
    res.send(data);
    return
  }
  if (query.level == '2' && query.neighborhood == '4') {
    let data = ['ابتدائية أويس بن عامر','ابتدائية 206', 'مجمع 1 اولاد ', 'مجمع البنات', 'متوسطة 128', 'متوسطة نعيم ابن مسعود ' , 'ثانوية 104', 'الخفجي بالإسكان', 'غرناطة بالإسكان', 'ابن باز بالإسكان']
    res.send(data);
    return
  }


  if (query.level == '1' && query.neighborhood == '5') {
    let data = ['جامعة الملك عبدالعزيز(بحي السليمانية)', 'جامعة جدة (بحي الفيصلية)']
    res.send(data);
    return
  }
  if (query.level == '2' && query.neighborhood == '5') {
    let data = ['إبتدائية 190', 'إبتدائية 137' , 'إبتدائية 171' , 'إبتدائية 141' , 'إبتدائية 184' , 'إبتدائية 106 ' , 'إبتدائية عمير بن سعد' , 'إبتدائية سعد بن عبادة', 'متوسطة صهيب بن سنان' , 'متوسطة  62', 'متوسطة  45' , 'متوسطة  66', 'ثانوية  53', 'ثانوية 89', 'ثانوية  42', 'دار الحافظات 43']
    res.send(data);
    return
  }

}) 


module.exports = router;
