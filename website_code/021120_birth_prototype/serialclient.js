var SerialPort = require('serialport');

var serialPort = new SerialPort("/dev/cu.usbmodem14201", {
  baudRate: 9600
});

const Readline = SerialPort.parsers.Readline
const parser = new Readline()
serialPort.pipe(parser)

serialPort.on("open", function() {

  var socket = require('socket.io-client')('http://dadododoes.tech:8080');

  socket.on('connect', function() {
    console.log("Connected!");
  });
  socket.on('disconnect', function() {
    console.log("disconnect");
  });

  parser.on("data", function(data) {
    var serializedData = data.toString('utf8')
    // socket.emit('serialdata', serializedData);
    console.log("Converted data from arduino : "+ serializedData)

    // console.log(data);
  });

});