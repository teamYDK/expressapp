var express = require('express');
var router = express.Router();
var multer = require('multer');

var upload = multer({ dest: './uploads/' }).single('thumbnail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 var firebaseRef = new Firebase("https://ydk-6f9ed.firebaseio.com");//追加
 var messagesRef = firebaseRef.child('messages');//追加
router.post('/upload', function(req, res) {/*データあげてます*/
  upload(req, res, function(err) {
    if(err) {
      res.send("Failed to write " + req.file.destination + " with " + err);
    } else {
      res.send("uploaded " + req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size);
    }
  });
});

 messagesRef.on('child_added', function(snapshot) { // ... 3
        var msg = snapshot.val();
        $('<li>').text(msg.name + ': ' + msg.body).prependTo('#messages');
      });

      $('#send').click(function() {
messagesRef.push({ // ...　囲んでる部分の描き方は変わらない
          name: $('#name').val(),//かわる
          body: $('#message').val

});

/*
 // var firebaseRef = new Firebase("https://ydk-6f9ed.firebaseio.com"); // ... 1　expressになってもかわらない
 //   var messagesRef = firebaseRef.child('messages'); // ... 2　　expressになってもかわらない

      // 既存メッセージを表示
      messagesRef.on('child_added', function(snapshot) { // ... 3
        var msg = snapshot.val();
        $('<li>').text(msg.name + ': ' + msg.body).prependTo('#messages');
      });

      $('#send').click(function() {
       
 // 新規メッセージを投稿  送るところ
     //   messagesRef.push({ // ...　囲んでる部分の描き方は変わらない
      //    name: $('#name').val(),//かわる
       //   body: $('#message').val
//});

*/
