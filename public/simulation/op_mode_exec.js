var simMainFunction = null;

linearOpMode = new LinearOpMode();
telemetry = new Telemetry();
gamepad1 = new Gamepad();
gamepad2 = new Gamepad();

function simInitOnClick() {
  simInitButton.disabled = true;
  simStartButton.disabled = false;
  simStopButton.disabled = false;

  linearOpMode.init();
  telemetry.update();
  simRunCode();
}

function simStartOnClick() {
  simStartButton.disabled = true;

  linearOpMode.start();
}

function simStopOnClick() {
  simInitButton.disabled = false;
  simStartButton.disabled = true;
  simStopButton.disabled = true;

  linearOpMode.stop();
  simMainFunction = null;
}


function simRunCode() {
  left_driveAsDcMotor = new DcMotor(0);
  right_driveAsDcMotor = new DcMotor(1);

  dio_0AsDigitalChannel = new DigitalChannel(0);
  dio_1AsDigitalChannel = new DigitalChannel(1);
  dio_2AsDigitalChannel = new DigitalChannel(2);
  dio_3AsDigitalChannel = new DigitalChannel(3);

  let code = Blockly.JavaScript.workspaceToCode();

  code = code.replaceAll("linearOpMode", "await linearOpMode");
  code = code.replace("function runOpMode()", "async function runOpMode()");
  code += "\nrunOpMode();";

  simMainFunction = new Function(code);
  simMainFunction();
}
