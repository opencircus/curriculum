### Hello World

The ubiquitous "Hello World" program of the microcontroller and SoC world is "blink an LED". The following code demonstrates how this is done using the Johnny-Five framework.

[LED blink](led-blink)

### Setup and Assemble Arduino

Full set up instruction can be found [here](https://github.com/rwaldron/johnny-five#setup-and-assemble-arduino)
* Plug in your Arduino or Arduino compatible microcontroller via USB
* Open the Arduino IDE (download the [Arduino IDE](https://www.arduino.cc/en/main/software)), select: File > Examples > Firmata > StandardFirmataPlus
    * StandardFirmataPlus is available in Firmata v2.5.0 or greater
* Click the "Upload" button.
* Download the [hello-world](hello-world) folder
* `cd` into the **hello-world** directory and run `npm install` to install necessary modules.
* Run `node app.js` to see the LED blink.
