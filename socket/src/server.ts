import * as express from "express";
import { Application } from "express";
import * as socketIO from "socket.io";
import { Socket, Server as SocketIOServer } from "socket.io";
import { createServer, Server as HTTPServer } from "http";

export class Server {
  private httpServer: HTTPServer;
  private app: Application;
  private io: SocketIOServer;

  private readonly DEFAULT_PORT = 4000;

  constructor() {
    this.initialize();
    this.handleRoutes();
    this.handleSocketConnection();
  }

  private initialize(): void {
    this.app = express();
    this.httpServer = createServer(this.app);
    // this.io = socketIO(this.httpServer);
    this.io = new SocketIOServer(this.httpServer);
  }

  private handleRoutes(): void {
    this.app.get("/", (req, res) => {
      res.send(`<h1>Hello world</h1>`);
    });
  }

  private handleSocketConnection(): void {
    this.io.on("connection", (socket: Socket) => {
      console.log("Socket connected");
    });
  }

  public listen(callback: (port: number) => void): void {
    this.httpServer.listen(this.DEFAULT_PORT, () => {
      callback(this.DEFAULT_PORT);
    });
  }
}
