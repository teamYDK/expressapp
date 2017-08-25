var express = require('express');
var router = express.Router();
var multer = require('multer');
var firebase=require('firebase');
var upload = multer({ dest: './uploads/' }).single('picture');
var ExifImage = require('exif').ExifImage;
var fs = require('fs');

firebase.initializeApp({
  databaseURL:"https://ydk-6f9ed.firebaseio.com"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = firebase.database().ref('messages').orderByKey();
  query.once('value').then(function(snapshot) {
    console.log(snapshot.exportVal());
    var messages = [];
    snapshot.forEach(function(childSnapshot) {
      messages.push(childSnapshot.val());
    });
    res.render('index', { title: 'My Mapping', messages: messages });
  });
});

router.get('/uploads/:fileid', function(req, res){//画像を表示させるために
  var buf = fs.readFileSync('./uploads/' + req.params.fileid);
  res.send(buf, { 'Content-Type': 'image/jpeg' }, 200);
});

router.post('/upload', function(req, res) {/*データあげてます*/
  upload(req, res, function(err) {//非同期の処理　upload　が読まれて次にいく、upload終わったらfunction実行される
    if(err) {//エラーの時
      res.send("Failed to write " + req.file.destination + " with " + err);
    } else {//成功の時

/*------------------------------度数秒形式から変換---------------------------*/

      var convert = function(dms){
        // var dms = [ 35, 40, 47.25 ];
        return dms[0] + ( dms[1] * 60 + dms[2] ) / 3600
      }

      new ExifImage({ image : req.file.path }, function (error, image) {
        if (error) {
          console.log('Error: '+error.message);
        } else {
          var lat = convert((image['gps']['GPSLatitude']));//スコープの範囲気をつける
          var lon = convert((image['gps']['GPSLongitude']));//スコープの範囲気をつける
          console.log(lat, lon);

          var firebaseRef =firebase.database().ref();//追加
          var messagesRef = firebaseRef.child('messages');// データベースの参照の取得
          messagesRef.push({ // ...　囲んでる部分の描き方は変わらない 非同期処理
            username: req.body.username,
            title:    req.body.title,
            comment:  req.body.comment,
            lat:      lat,//リクエストした値でない
            lon:      lon,//リクエストした値でない
            file:     req.file.filename
          }).then(function(){
            res.send("uploaded " + req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size);//画面の表示
          });
        }
      });

/*------------------------------度数秒形式から変換---------------------------*/

    }
  });
});

module.exports=router;
