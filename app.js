var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var twilio = require('twilio');
var bodyParser = require('body-parser');
var qs = require('querystring');

const port = process.env.PORT || 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
var curr_command;

app.post('/', function(request, response) {  
  console.log(request.body);
  var sender = request.body.From;
  var message = request.body.Body;
  curr_command = {"command": message, "sender" : sender, "timestamp" : Date.now()};
  response.send()
})

app.get('/', function(request, response) {
  console.log('welcome');
  if (curr_command == null) {
    response.send('error');
  }
  console.log('got' + curr_command);
  response.jsonp(curr_command);
})


app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log('server is listening on ' + port)
})
