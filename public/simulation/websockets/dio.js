class DIOProvider extends Provider {

  data;

  constructor(port) {
    super("DIO", port.toString());
    this.data = simDIOData[port];
  }

  registerCallbacks() {
    this.data.init.registerCallback(this.basicCallback("<init"));
    this.data.input.registerCallback(this.basicCallback("<input"));
    this.data.value.registerCallback(this.basicCallback("<>value"));
  }

  unregisterCallbacks() {
    this.data.init.unregisterCallback();
    this.data.input.unregisterCallback();
    this.data.value.unregisterCallback();
  }

  onNetValueChanged(key, value) {
    if(key === "<>value") {
      this.data.value.set(value);
    }
  }
}
