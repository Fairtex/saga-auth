// import io, { Socket } from 'socket.io-client';

// class SocketService {
//   client: Socket | null = null;

//   connect = () => {
//     if (!this.client) {
//       this.client = io('http://localhost:8000', {
//         autoConnect: false,
//       });
//       console.log('socket connect ', this.client);
//     }
//   };

//   disconnect = () => {
//     if (this.client?.connected) {
//       this.client.close();
//       this.client = null;
//     }
//   };

//   send = (msg: string) => {
//     if (this.client?.connected) {
//       this.client.send(msg);
//       console.log('send to socket ', msg);
//     }
//   };

//   on = (e: string, callback: (data: any) => void) => {
//     this.client?.on(e, callback);
//   };
// }

// export default new SocketService();

class SocketService {
  client: WebSocket | null = null;

  connect = () => {
    if (!this.client) {
      this.client = new WebSocket('wss://echo.websocket.org');
    }
  };

  send = (msg: string) => {
    if (this.client) {
      this.client.send(msg);
    }
  };
}

export default new SocketService();
