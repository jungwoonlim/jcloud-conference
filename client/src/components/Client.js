import React, { Component } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:4000", { transports: ["websocket"] });

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "been", // userid"been"
    };
  }

  onclick = (e) => {
    const str = "hwi"; //버튼을 클릭하면
    socket.emit("alert", str); //서버의 소켓 alert이벤트에 "hwi"를 보낸다
    console.log(str);
  };

  componentDidMount() {
    // this.onclick();
    socket.emit("roomjoin", this.state.userid); // been이라는 방 만들기
  }

  render() {
    return (
      <div style={{ width: 400, margin: "100px auto" }}>
        <h1>Clinet</h1>
        <button onClick={this.onclick}>Send</button>
      </div>
    );
  }
}

export default Client;
