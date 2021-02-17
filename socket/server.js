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

let count = 0;
io.on("connection", function (socket) {
  console.log("소켓 접속 완료");
  count++;

  socket.on("conference message", (message) => {
    if (count === 1) {
      socket.emit("create conference");
    } else {
      socket.emit("join conference");
    }
  });

  socket.on("disconnect", () => {
    count--;
    console.log("소켓 접속 종료");
  });
});

http.listen(port, () => {
  console.log(`express is running on ${port}`);
});
