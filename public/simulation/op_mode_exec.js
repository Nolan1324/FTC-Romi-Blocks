var simMainFunction = null;

linearOpMode = new LinearOpMode();
telemetry = new Telemetry();

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
  let code = Blockly.JavaScript.workspaceToCode();

  code = code.replaceAll("linearOpMode", "await linearOpMode");
  code = code.replace("function runOpMode()", "async function runOpMode()");
  code += "\nrunOpMode();";

  simMainFunction = new Function(code);
  simMainFunction();
}
