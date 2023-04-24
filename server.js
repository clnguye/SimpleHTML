var express = require('express');
var app = express();
app.use(express.static('public'))

const path = require('path')

app.get('/html', function(req, res){
   const filePath = path.resolve(__dirname, 'index.html')
   res.sendFile(filePath)
})

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
   console.log(__dirname)
})