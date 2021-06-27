class SimClient {
  socket;

  createClient() {
    this.socket = new WebSocket("ws://10.0.0.2:3300/wpilibws");

    this.socket.onopen = (e) => {
      console.log("Open")
      simConnectionStatus.textContent = "Romi WebSocket: connected";

      simAllowConnect(false);
    };

    this.socket.onmessage = (e) => {
      console.log(e.data);
    };

    this.socket.onclose = (e) => {
      console.log("Close");
      simConnectionStatus.textContent = "Romi WebSocket: disconnected";

      simAllowConnect(true);
    };

    this.socket.onerror = (e) => {
      simConnectionStatus.textContent = "Romi WebSocket: error";

      simAllowConnect(true);
    };
  }

  open() {
    if(this.socket == null || this.isClosed()) {
      this.createClient();
    }
  }

  close() {
    if(this.socket != null) {
      this.socket.close();
    }
    this.socket = null;
  }

  send(message) {
    this.socket.send(message);
  }

  isOpen() {
    return this.socket.readyState === WebSocket.OPEN;
  }

  isClosed() {
    return this.socket.readyState === WebSocket.CLOSED;
  }
}

simClient = new SimClient();

function simConnectOnClick() {
  simClient.open();

  simAllowConnect(false);
}

function simDisconnectOnClick() {
  simClient.close();
}

function simAllowConnect(allow) {
  simConnectButton.disabled = !allow;
  simDisconnectButton.disabled = allow;
}



