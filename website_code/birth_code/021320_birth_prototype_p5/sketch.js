var serial;          // variable to hold an instance of the serialport library
var portName = '/dev/tty.usbmodem14201';  // fill in your serial port name here
var inData;                             // for incoming serial data
var inString;

function setup() {
  serial = new p5.SerialPort(); // fill in your own IP address in place of the one shown here

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
  //console.log('a');

  // inString = serial.readString()
//  inString = serial.read();

   inData = serial.readLine();
  // inData = Number(serial.read());
  // inData = Number(serial.readLine());
  // console.log('received data');

  // // read a string from the serial port:
  // inString = serial.readLine();
  // // check to see that there's actually a string there:
  // if (inString.length > 0) {
  //   // convert it to a number:
  //   inData = Number(inString);
  //   // console.log(inData);
  // }

  console.log(inData);

  //if tag a go to this url
  if (inData == "Tag A") {
    window.location.href = "http://www.google.com";
  }
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}


function draw() {
  background(255, 255, 0);
  fill(0);
  text("Tag Name: " + inData, 30, 30);
  //text("Tag Name: " + inString, 30, 30);
  //console.log(inString);
  // console.log(inData);
}