var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {};
  handle["/"] = requestHandlers.start;
  handle["/start"] = requestHandlers.start;
  handle["/upload"] = requestHandlers.upload;
var http = require("http");
var url = require("url");

server.start(router.route, handle);
function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}
exports.start = start;

function start() {
  console.log('Request handler 'start' was called.');
}

function upload() {
  console.log('Request handler 'upload' was called.');
}

exports.start = start;
exports.upload = upload;