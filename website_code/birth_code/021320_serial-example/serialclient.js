var SerialPort = require('serialport');

// var serialPort = new SerialPort("/dev/cu.usbmodem1411", {
//   baudRate: 9600
// });

var serialPort = new SerialPort("/dev/cu.usbmodem14201", {
  baudRate: 9600
});

serialPort.on("open", function() {
  var socket = require('socket.io-client')('http://dadododoes.tech:8080');
  // var socket = require('socket.io-client')('http://liveweb-new.itp.io:8080');
  socket.on('connect', function() {
    console.log("Connected");
  });
  socket.on('event', function(data) {
    console.log("Event ", data);

  });
  socket.on('disconnect', function() {
    console.log("disconnect");
  });

  serialPort.on("data", function(data) {
    socket.emit('serialdata', data);
    console.log(data);
  });

});
