var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var twilio = require('twilio');
var bodyParser = require('body-parser');
var qs = require('querystring');

const port = process.env.PORT || 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function(request, response) {  
  
  console.log(request.body);
  var sender = request.body.From;
  var message = request.body.Body;


 
  response.jsonp({"command": message, "sender" : sender});
})

app.get('/', function(request, response) {
  console.log('welcome')  ;
  response.jsonp({"command":"next", "sender":"232-123-1232"});
})


app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log('server is listening on ' + port)
})
