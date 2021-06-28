simProviders = {};

function simCreateProviders() {
  simAddProvider(new DriverStationProvider());
  for(let i = 0; i < 2; i++) {
    simAddProvider(new PWMProvider(i));
  }
  for(let i = 0; i < 8; i++) {
    simAddProvider(new DIOProvider(i));
  }
}

function simDestroyProviders() {
  for (const [key, value] of Object.entries(simProviders)) {
    value.unregisterCallbacks();
    delete simProviders[key];
  }
}

function simReceive(data) {
  let message = JSON.parse(data);

  let type = message.type;
  let device = message.device;
  let payload = message.data;

  let messageKey = simCreateKey(type, device);
  let provider = simProviders[messageKey];

  if(provider != null) {
    for (const [key, value] of Object.entries(payload)) {
      provider.onNetValueChanged(key, value);
    }
  }
}

function simSendValue(type, device, field, value) {
  let payload = {};
  payload[field] = value;

  simSendPayload(type, device, payload);
}

function simSendPayload(type, device, payload) {
  let message = {
    type: type,
    device: device,
    data: payload
  };

  console.log(message);

  simClient.send(JSON.stringify(message));
}

function simAddProvider(provider) {
  let key = simCreateKey(provider.type, provider.device);
  simProviders[key] = provider;
  provider.registerCallbacks();
}

function simCreateKey(type, device) {
  if(device == null || device === "") {
    return type;
  } else {
    return type + ":" + device;
  }
}
