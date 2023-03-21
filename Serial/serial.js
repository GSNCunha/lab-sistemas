const fs = require('fs');
const { SerialPort } = require('serialport');

const port = new SerialPort({
  path: '/dev/cu.usbmodem14201',
  baudRate: 9600,
});

port.on('open', function() {
  console.log('Serial Port Opened');
});

port.on('data', function(data) {
  // convert the received data to an array of bytes
  const bytes = Array.from(data);

  // get the first element of the array (assuming all elements are the same)
  const value = bytes[0];

  // log the value to the console
  console.log('Data:', value);

  // write the value to the "arduino.txt" file
  fs.writeFile('./arduino.txt', value.toString(), function(err) {
    if (err) throw err;
    console.log('Data written to arduino.txt');
  });
});

function sendBinary(value) {
  const buffer = Buffer.alloc(1);
  buffer.writeUInt8(value, 0);
  port.write(buffer);
}
function sendBinary1(){
  fs.readFile('site.txt', function(err, data) {
    if (err) throw err;
    const value = parseInt(data.toString());
    console.log('Value read from site.txt:', value);
    sendBinary(value);
  });
}
port.on('open', () => {
setInterval(sendBinary1, 960);
});