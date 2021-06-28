class SimClient {
  socket;

  createClient() {
    this.socket = new WebSocket("ws://10.0.0.2:3300/wpilibws");

    this.socket.onopen = (e) => {
      console.log("Open")
      simSetConnectionStatus("connected");

      simCreateProviders();

      simAllowConnect(false);
    };

    this.socket.onmessage = (e) => {
      simReceive(e.data);
    };

    this.socket.onclose = (e) => {
      console.log("Close");
      simSetConnectionStatus("disconnected");

      simDestroyProviders();

      simAllowConnect(true);
    };

    this.socket.onerror = (e) => {
      simSetConnectionStatus("error");

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
    if(this.socket != null && this.isOpen()) {
      this.socket.send(message);
    }
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
  simSetConnectionStatus("connecting...");
  simAllowConnect(false);

  simClient.open();
}

function simDisconnectOnClick() {
  simClient.close();
}

function simAllowConnect(allow) {
  simConnectButton.disabled = !allow;
  simDisconnectButton.disabled = allow;
}

function simSetConnectionStatus(status) {
  simConnectionStatus.textContent = "Romi WebSocket: " + status;
}



