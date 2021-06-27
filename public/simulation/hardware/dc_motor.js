class DcMotor {

  port = 0;
  sign = 1;

  constructor(port) {
    this.port = port;
  }

  setDirection(direction) {
    this.sign = direction === "REVERSE" ? -1 : 1;
  }

  setPower(power) {
    console.log(power);
  }

  setDualDirection(direction, other, otherDirection) {
    this.setDirection(direction);
    other.setDirection(otherDirection);
  }

  setDualPower(power, other, otherPower) {
    this.setPower(power);
    other.setPower(otherPower);
  }
}
