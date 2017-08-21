var express = require('express');
var app = express();

var routes = {
index : require('./routes/index'),
};

app.get('/', routes.index.index);
    res.send('Hello World!');
})

var server = app.listen(3000, function(){
    console.log('Server is running!');
})
