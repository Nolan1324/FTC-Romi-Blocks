class DriverStationProvider extends Provider {

  constructor() {
   super("DriverStation", "");
  }

  registerCallbacks() {
    simDriverStationData.enabled.registerCallback(this.basicCallback(">enabled"));
    simDriverStationData.autonomous.registerCallback(this.basicCallback(">autonomous"));
  }

  unregisterCallbacks() {
    simDriverStationData.enabled.unregisterCallback();
    simDriverStationData.autonomous.unregisterCallback();
  }

  onNetValueChanged(key, value) {

  }
}
