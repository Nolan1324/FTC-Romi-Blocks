class DigitalChannel {
  data;

  port;

  constructor(port) {
    this.port = port;
    this.data = simDIOData[port];

    this.data.init.set(false);
    this.data.init.set(true);
  }

  getMode() {
    return this.data.input.get() ? "INPUT" : "OUTPUT";
  }

  setMode(mode) {
    this.data.input.set(mode === "INPUT");
  }

  getState() {
    return this.data.value.get();
  }

  setState(state) {
    if(!this.data.input.get()) {
      this.data.value.set(state);
    }
  }
}
