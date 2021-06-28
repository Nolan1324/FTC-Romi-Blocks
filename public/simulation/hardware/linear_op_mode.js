class LinearOpMode {

  started = false;
  stopped = false;

  init() {
    this.started = false;
    this.stopped = false;
  }

  start() {
    simDriverStationData.enabled.set(true);

    this.started = true;
  }

  stop() {
    simDriverStationData.enabled.set(false);

    for(let i = 0; i < 2; i++) {
      simPWMData[i].speed.set(0);
    }

    for(let i = 0; i < 4; i++) {
      simDIOData[i].value.set(false);
    }

    this.stopped = true;
  }

  async waitForStart() {
    while(!this.started) {
      await this.idle();
    }
    this.started = false;
  }

  async opModeIsActive() {
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
