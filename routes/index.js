var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getMyNodeResults',function (reg,res,next) {
  res.render('getMyNodeResults',{title: 'Doit'});

})
module.exports = router;
