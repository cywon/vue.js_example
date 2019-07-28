var express = require('express');
var app = express();

app.use(express.urlencoded({extended: true}));
app.post('/', function(req, res){
  console.log('클라이언트로부터 온 요청 : ' + req.body.userId);
  console.log('클라이언트로부터 온 요청 : ' + req.body.password);
  console.log('클라이언트로부터 온 요청 : ' + req.body.food);
  res.json({"message": "정상적으로 서버에 전달되었습니다."}); 
})

var port = process.env.PORT || 8080;  //서버 포트(port) 설정
app.listen(port, ()=> { console.log("포트 : " + port + " 을 열고 서버 동작 중...") });