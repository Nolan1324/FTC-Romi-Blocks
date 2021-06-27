class Provider {
  type;
  device;

  constructor(type, device) {
    this.type = type;
    this.device = device;
  }

  registerCallbacks() {}
  unregisterCallbacks() {}
  onNetValueChanged(key, value) {}

  basicCallback(field) {
    return (value) => simSendValue(this.type, this.device, field, value);
  }
}
