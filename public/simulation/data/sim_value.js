class SimValue {
  value;
  callback = () => {};

  constructor(initialValue) {
    this.value = initialValue;
  }

  get() {
    return this.value;
  }

  set(value) {
    if(this.value !== value) {
      this.callback(value);
    }
    this.value = value;
  }

  registerCallback(callback) {
    this.callback = callback;
    this.callback(this.value);
  }

  registerCallbackWithoutCall(callback) {
    this.callback = callback;
  }

  unregisterCallback() {
    this.callback = () => {};
  }
}
