class PWMData {
  init = new SimValue(false);
  speed = new SimValue(0);
  position = new SimValue(0);
}

simPWMData = [];
for(let i = 0; i < 2; i++) {
  simPWMData.push(new PWMData());
}
