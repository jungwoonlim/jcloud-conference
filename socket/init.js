const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 4000; //3001번 포트 사용

var http = require("http").createServer(app); //모듈사용
const io = require("socket.io")(http); //모듈 사용

app.use(bodyParser.json());

app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//////////////////////////////////////////////////////////////

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("init", function (data) {
    console.log(data.name);
    socket.emit("welcome", `hello! ${data.name}`);
  });
});

http.listen(4000, () => {
  console.log("listening on *:4000");
});
