class Gamepad {

  constructor() {

  }

  getGamepad() {
    return navigator.getGamepads()[simGamepadIndex];
  }

  getAxis(index) {
    let gamepad = this.getGamepad();
    if(gamepad == null) return 0.0;
    return this.deadband(gamepad.axes[index]);
  }

  getButtonPressed(index) {
    let gamepad = this.getGamepad();
    if(gamepad == null) return false;
    return gamepad.buttons[index].pressed;
  }

  getButtonValue(index) {
    let gamepad = this.getGamepad();
    if(gamepad == null) return 0.0;
    return gamepad.buttons[index].value;
  }

  deadband(value) {
    let deadbandValue = 0.1;
    if(value > -deadbandValue && value < deadbandValue) {
      return 0;
    }
    return value;
  }

  getA = () => this.getButtonPressed(0);
  getAtRest = () => {}
  getB = () => this.getButtonPressed(1);
  getBack = () => this.getButtonPressed(8);
  getCircle = () => {}
  getCross = () => {}
  getDpadDown = () => this.getButtonPressed(13);
  getDpadLeft = () => this.getButtonPressed(14);
  getDpadRight = () => this.getButtonPressed(15);
  getDpadUp = () => this.getButtonPressed(12);
  getGuide = () => {}
  getLeftBumper = () => this.getButtonPressed(4);
  getLeftStickButton = () => this.getButtonPressed(10);
  getLeftStickX = () => this.getAxis(0);
  getLeftStickY = () => this.getAxis(1);
  getLeftTrigger = () => this.getButtonValue(6);
  getOptions = () => {}
  getPS = () => {}
  getRightBumper = () => this.getButtonPressed(5);
  getRightStickButton = () => this.getButtonPressed(11);
  getRightStickX = () => this.getAxis(2);
  getRightStickY = () => this.getAxis(3);
  getRightTrigger = () => this.getButtonValue(7);
  getShare = () => {}
  getSquare = () => {}
  getStart = () => this.getButtonPressed(9);
  getTouchpad = () => {}
  getTriangle = () => {}
  getX = () => this.getButtonPressed(2);
  getY = () => this.getButtonPressed(3);
}

