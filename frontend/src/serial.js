const  { SerialPort } = require('serialport');
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
  
    // log the array of bytes to the console
    console.log('Data:', bytes);
  });
  
function sendBinary() {
  port.write(Buffer.from([0b11100100]));
}

port.on('open', () => {
  setInterval(sendBinary, 1000);
});
