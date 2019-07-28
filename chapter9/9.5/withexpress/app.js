const express = require('express');
const app = express();
const hostname ='127.0.0.1';
const port = 1377;
const memo = require('./memo.js');
app.use('/memo', memo);


app.get('/', (req, res) => {
  res.status = 200;
  res.set('Content-Type', 'text/html');
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
app.listen(port, hostname, () => {
  console.log('서버 동작 중... 포트(port) : ' + port);
})
