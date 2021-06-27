simProviders = {};

function simReceive(data) {
  let message = JSON.parse(data);
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
  simClient.send(JSON.stringify(message));
}

function simCreateKey(type, device) {
  if(device == null || device === "") {
    return type;
  } else {
    return type + ":" + device;
  }
}
