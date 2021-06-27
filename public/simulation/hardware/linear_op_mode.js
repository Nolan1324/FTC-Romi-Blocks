class LinearOpMode {

  started = false;
  stopped = false;

  init() {
    this.started = false;
    this.stopped = false;
  }

  start() {
    this.started = true;
  }

  stop() {
    this.stopped = true;
  }

  async waitForStart() {
    while(!this.started) {
      await this.idle();
    }
    this.started = false;
  }

  async opModeIsActive() {
    console.log("EEE");

    await this.idle();
    if(this.stopped) {
      this.stopped = false;
      return false;
    }
    return true;
  }

  async idle() {
    await new Promise(resolve => setTimeout(resolve, 1));
  }

  async sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}
