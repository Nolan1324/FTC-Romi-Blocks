class DcMotor {

  data;

  port = 0;
  sign = 1;

  constructor(port) {
    this.port = port;
    this.data = simPWMData[port];

    this.data.init.set(false);
    this.data.init.set(true);
  }

  setDirection(direction) {
    this.sign = direction === "REVERSE" ? -1 : 1;
  }

  setPower(power) {
    this.data.speed.set(this.adjustSign(power));
  }

  setDualDirection(direction, other, otherDirection) {
    this.setDirection(direction);
    other.setDirection(otherDirection);
  }

  setDualPower(power, other, otherPower) {
    this.setPower(power);
    other.setPower(otherPower);
  }

  getPower() {
    return this.adjustSign(this.data.speed.get());
  }

  adjustSign(power) {
    return this.sign * power;
  }
}
