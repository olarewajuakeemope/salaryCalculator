const http = require('http');
var fs = require('fs');

function onRequest(request, response){
   response.writeHead(200, {'Content-Type':'text/html'});
  var file;
  var path = request.url;
  if(path === '/'){
    file = './index.html';
  }else{
    file = '.' + path;
  }
   fs.readFile(file, null, function(error, data){
     if(error){
      response.writeHead(404);
      response.write('File not found');
     }else{
      response.write(data);
      response.end();
     }
   });
   
}

http.createServer(onRequest).listen(81);
