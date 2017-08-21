var express = require('express');
var router = express.Router();
var multer = require('multer');
var firebase=require('firebase');
var upload = multer({ dest: './uploads/' }).single('thumbnail');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post('/upload', function(req, res) {/*データあげてます*/
    upload(req, res, function(err) {//非同期の処理　upload　が読まれて次にいく、upload終わったらfunction実行される
	if(err) {//エラーの時
	    res.send("Failed to write " + req.file.destination + " with " + err);
	} else {//成功の時
	    firebase.initializeApp({
		databaseURL:"https://ydk-6f9ed.firebaseio.com"
            });
	    
	    var firebaseRef =firebase.database().ref();//追加
	    var messagesRef = firebaseRef.child('messages');//追加
	    messagesRef.push({ // ...　囲んでる部分の描き方は変わらない 非同期処理
		name: req.body.name,//かわる
		body: req.body.body

	    }).then(function(){
		res.send("uploaded " + req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size);//画面の表示  
	    });
	}
    });

    
});

module.exports=router;

