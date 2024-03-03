const { SerialPort } = require('serialport')
const Readline = require('@serialport/parser-readline'); // This is an optional dependency for parsing data


const port = new SerialPort({ path: 'COM9', baudRate: 9600 });

// If you need to parse data line by line, you can use the following lines
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('data', (data) => {
  const dataString = data.toString('utf8');
  console.log('Received data:', dataString); 
});