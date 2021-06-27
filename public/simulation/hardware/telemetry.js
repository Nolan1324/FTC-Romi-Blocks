class Telemetry {
  text = "";

  addTextData(key, value) {
    this.text += key + ": " + value;
    this.text += "\n"
  }

  addNumericData(key, value) {
    this.text += key + ": " + value;
    this.text += "\n"
  }

  update() {
    simTelemetry.textContent = this.text;
    this.text = "";
  }
}
