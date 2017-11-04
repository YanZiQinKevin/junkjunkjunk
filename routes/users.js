var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getMyNodeResults',function (reg,res,next) {
    res.render('getMyNodeResults',{title: 'Doit'});

})
module.exports = router;
