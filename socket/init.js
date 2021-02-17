const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 4000; //3001번 포트 사용

var http = require("http").createServer(app); //모듈사용
const io = require("socket.io")(http); //모듈 사용

app.use(bodyParser.json());

app.use(cors({ origin: "http://localhost:3000/" }));
app.get("/", (req, res) => {
  res.send("hjsd");
});
//////////////////////////////////////////////////////////////

io.on("connection", function (socket) {
  console.log("소켓 접속 완료");

  socket.on("roomjoin", (userid) => {
    //roomjoin 이벤트명으로 데이터받기 //socket.on
    console.log(userid);
    socket.join(userid); //userid로 방 만들기
  });

  socket.on("alert", (touserid) => {
    //alet 이벤트로 데이터 받기
    io.to(touserid).emit("heejewake", touserid); //touserid: 클라이언트1이 보낸데이터"hwi"
  }); //heejewake이벤트: hwi 에게 메시지 hwi를 보낸다
});

http.listen(port, () => {
  console.log(`express is running on ${port}`);
});
