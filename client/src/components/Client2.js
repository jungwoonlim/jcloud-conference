import { message } from "antd";
import React, { Component } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:4000", { transports: ["websocket"] });

class Client2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "hwi",
    };
  }

  componentDidMount() {
    socket.emit("roomjoin", this.state.userid);
    socket.on("heejewake", (massage) => {
      // 클라이언트1이 누른 버튼-> 서버-> heejewake이벤트
      alert(massage); // 에서 메시지 hwi를 받는다
    });
  }

  render() {
    return (
      <div style={{ width: 400, margin: "100px auto" }}>
        <h1>Client2</h1>
      </div>
    );
  }
}

export default Client2;
