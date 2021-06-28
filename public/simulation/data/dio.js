class DIOData {
  init = new SimValue(false);
  input = new SimValue(false);
  value = new SimValue(false);
}

simDIOData = [];
for(let i = 0; i < 8; i++) {
  simDIOData.push(new DIOData());
}
