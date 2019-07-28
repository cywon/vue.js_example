const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();      //express app 생성

app.use(bodyparser.json());  //json 형식 파싱하기
app.use(cors()); //cors 적용

const dbconfig = require("./db.js");
const mongoose = require('mongoose');
//데이터베이스 연결 및 상태 로깅
mongoose.connect(dbconfig.url, { useNewUrlParser:true})
.then( () => {
    console.log("정상적으로 MongoDB 서버에 연결되었습니다.");
}).catch( err => {
    console.log("MongoDB에 연결되지 않았습니다.", err);
});

app.get('/', (req, res) => { 
  console.log(req);
  res.json({"message": "여러분들을 환영합니다."}); 
})

require('./router.js')(app);
var port = process.env.PORT || 8000;  //서버 포트(port) 설정

//클라이언트로부터 요청 듣기
app.listen(port, ()=> { console.log("포트 : " + port + " 을 열고 서버 동작 중...") });
