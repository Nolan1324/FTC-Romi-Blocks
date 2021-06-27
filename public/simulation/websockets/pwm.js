class PWMProvider extends Provider {

  data;

  constructor(port) {
    super("PWM", port.toString());
    this.data = simPWMData[port];
  }

  registerCallbacks() {
    this.data.init.registerCallback(this.basicCallback("<init"));
    this.data.speed.registerCallback(this.basicCallback("<speed"));
    this.data.position.registerCallback(this.basicCallback("<position"));
  }

  unregisterCallbacks() {
    this.data.init.unregisterCallback();
    this.data.speed.unregisterCallback();
    this.data.position.unregisterCallback();
  }

  onNetValueChanged(key, value) {

  }
}
