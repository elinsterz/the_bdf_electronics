var serial;          // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem14201';  // fill in your serial port name here
var inData;                             // for incoming serial data

function setup() {
    serial = new p5.SerialPort('192.168.1.154'); // fill in your own IP address in place of the one shown here

    //serial = new p5.SerialPort();       // make a new instance of the serialport library
    serial.on('list', printList);  // set a callback function for the serialport list event
    serial.on('connected', serverConnected); // callback for connecting to the server
    serial.on('open', portOpen);        // callback for the port opening
    serial.on('data', serialEvent);     // callback for when new data arrives
    serial.on('error', serialError);    // callback for errors
    serial.on('close', portClose);      // callback for the port closing

    serial.list();                      // list the serial ports
    serial.open(portName);              // open a serial port

    createCanvas(400, 300);
}

// get the list of ports:
function printList(portList) {
    // portList is an array of serial port names
    for (var i = 0; i < portList.length; i++) {
        // Display the list the console:
        console.log(i + " " + portList[i]);
    }
}

function serverConnected() {
    console.log('connected to server.');
  }
   
  function portOpen() {
    console.log('the serial port opened.')
  }
   
  function serialEvent() {
    inData = Number(serial.read());
    // inData = Number(serial.readLine());
    console.log('received data');
  }
   
  function serialError(err) {
    console.log('Something went wrong with the serial port. ' + err);
  }
   
  function portClose() {
    console.log('The serial port closed.');
  }


  function draw() {
    background(255,255,0);
    fill(0);
    text("Tag Name: " + inData, 30, 30);
    console.log(inData);
  }