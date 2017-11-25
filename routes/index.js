var express = require('express');
var router = express.Router();
var app=express();
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
var bodyParser = require('body-parser');
var path = require ('path'); //to work with separtors on any OS including Windows
var querystring = require('querystring'); //for use in GET Query string of form URI/path?name=value
/* GET home page. */



router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencode



// router.post('/test/submit',function (req,res,next) {
//     var id=req.body.id;
//    //res.redirect('/test/'+id);
//     res.send("hello " + id);
// })
router.post('/test/submit', function(req, res, next) {
    var body = JSON.stringify(req.body);  //if wanted entire body as JSON
    var params = JSON.stringify(req.params);//if wanted parameters
    var value_name = req.body.id;  //retrieve the data associated with name
    res.send("hello " + value_name);
});
router.post('/readNameAndRespond',function (req,res,next) {
    var body=JSON.stringify(req.body);
    var params = JSON.stringify(req.params);
    var value_name=req.body.email;
    res.send("hello"+value_name);

});



module.exports = router;