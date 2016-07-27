var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var twilio = require('twilio')('ACae3557ad814eab4071bb274c93d83d04')('4b00b65623d92612020aa3752f578769');;

const port = process.env.PORT || 3000

app.get('/', function(request, response) {  
  var data = qs.parse(request);
  var jsonString = JSON.stringify(data);
  var JsonDataObject = JSON.parse(jsonString);

  console.log(JsonDataObject);

   // response.writeHead(200, {
   //      'Content-Type':'text/xml'
   //  });
   //  response.end(resp.toString());

  // TODO: Karan, the return format has to be this or something like it:
  //       Basically a json object inside the response.jsonp parenthesis

  response.jsonp({"command":"next", "sender":"232-123-1232"});

})

app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log('server is listening on ' + port)
})


io.on('connection', function (socket) {
  console.log("CONNECTED");
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});