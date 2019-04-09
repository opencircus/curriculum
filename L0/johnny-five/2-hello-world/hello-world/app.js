var five = require('johnny-five');
var board = new five.Board();

board.on('ready', () => {
  // create an LED on pin 13
  var led = new five.Led(13);
  // blink every half second
  led.blink(500);
});
