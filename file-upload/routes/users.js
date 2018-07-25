var express = require('express');
var router = express.Router();

/* GET usersoo listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/', function(req, res) {
  res.send('respond user List');
});
router.get('/:id([a-zA-Z0-9]{10,30})', function(req, res) {
  var userID = req.url;
  var userID = userID.replace( "/", "" ) ;
  res.send('respond user Info userid:' + userID);
  console.log(req.url);
});
router.get('/regist', function(req, res) {
  res.send('respond user Regist!!');
});


module.exports = router;
