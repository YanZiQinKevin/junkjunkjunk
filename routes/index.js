var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/doit2',function (reg,res,next) {
  res.render('doit2',{title: 'Doit'});

})
module.exports = router;
