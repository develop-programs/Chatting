import { Server } from "socket.io";

class SocketService {
  private _io: Server;

  constructor() {
    this._io = new Server({
      cors: {
        origin: "*",
        allowedHeaders: ["*"],
      },
    });
  }

  get io() {
    return this._io;
  }

  public listener() {
    const io = this.io;
    io.on("connect", (socket) => {
      console.log(`Connected: ${socket.id}`);
      socket.on("event:message", async ({ msg }: { msg: string }) => {
        console.log(msg);

        io.emit("messages", msg);
      });
    });
  }
}

export default SocketService;
