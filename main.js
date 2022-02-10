const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 8000;
const mysql =  require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ramazan777',
  database: 'testdb'
})


http.createServer( (request, response) => {
  console.log('request ', request.url);
  // cosnt app = Vue.Vue

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
}).listen(PORT);
console.log(`Server running at localhost: ${PORT}`);
