var express = require('express');
var router = express.Router();
var multer = require('multer');
var firebase=require('firebase');
var upload = multer({ dest: './uploads/' }).single('picture');

firebase.initializeApp({
  databaseURL:"https://ydk-6f9ed.firebaseio.com"
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/messages', function(req, res) {
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    res.render('messages', { snapshot: snapshot.exportVal() });
  });
});

router.post('/upload', function(req, res) {/*データあげてます*/
  upload(req, res, function(err) {//非同期の処理　upload　が読まれて次にいく、upload終わったらfunction実行される
    if(err) {//エラーの時
      res.send("Failed to write " + req.picture.destination + " with " + err);
    } else {//成功の時
      var firebaseRef =firebase.database().ref();//追加
      var messagesRef = firebaseRef.child('messages');// データベースの参照の取得
      messagesRef.push({ // ...　囲んでる部分の描き方は変わらない 非同期処理
        username: req.body.username,
        title:    req.body.title,
        comment:  req.body.comment,
        file:     req.file.filename
      }).then(function(){
        res.send("uploaded " + req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size);//画面の表示
      });
    }
  });
});

module.exports=router;
