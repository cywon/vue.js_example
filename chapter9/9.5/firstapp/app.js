const http = require('http');
const hostname ='127.0.0.1';
const port = 8001;

const server = http.createServer( (req, res) => {
  res.status = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.setHeader('Content-Type', 'text/html');
  res.write('<html></html>' +
          '<head>' +
          '  <title>Test</title> ' +
          '  <meta charset="utf-8" />' +
          '</head>' +
          '<body>' +
          '  <div>안녕하세요.</div>' +
          '</body>');  
  res.end(); 
});
server.listen(port, hostname, () => {
  console.log('서버 동작 중... 포트(port) : ' + port);
})
