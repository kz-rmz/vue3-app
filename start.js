const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer( (request, response) => {
  console.log('request ', request.url);

  let filePath = '.' + request.url;
  if (filePath == './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if(err){
      if(err.code == 'ENONET'){
        fs.readFile('./404,html', () =>{
          response.writeHead(404, { 'Content-Type': 'text-html' });
          response.end(content, 'utf-8');
        })
      } else {
        response.writeHead(500);
        response.end(`Sorry: err`);
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType })
      response.end(content, 'utf-8')
    }
  })
  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 8000;
  }
}).listen(port);
console.log(`Server running at localhost`);
