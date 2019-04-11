### Hello World

The ubiquitous "Hello World" program of the microcontroller and SoC world is "blink an LED". The following code demonstrates how this is with Arduino.

[LED blink](led-blink)

### Setup and Assemble Arduino

Full set up instruction can be found [here](https://www.arduino.cc/en/Tutorial/Blink)
* Plug in your Arduino or Arduino compatible microcontroller via USB
* Open the Arduino IDE (download the [Arduino IDE](https://www.arduino.cc/en/main/software)), select: File > Examples > Basics > Blink
    * The code is also available in [LED blink](led-blink)
* Click the "Upload" button.

### Circuit

Most Arduinos have an on-board LED you can control. On the UNO, MEGA and ZERO it is attached to digital pin 13, on MKR1000 on pin 6.

```
D13 - 101
D13 - Due
D1 - Gemma
D13 - Intel Edison
D13 - Intel Galileo Gen2
D13 - Leonardo and Micro
D13 - LilyPad
D13 - LilyPad USB
D13 - MEGA2560
D13 - Mini
D6 - MKR1000
D13 - Nano
D13 - Pro
D13 - Pro Mini
D13 - UNO
D13 - Yún
D13 - Zero
```

Our board is UNO so we use pin 13.

If you want to blink an external LED with this code, you need to build this circuit, where you connect one end of the resistor to the digital pin (13 in our case). Connect the long leg of the LED (the positive leg, called the anode) to the other end of the resistor. Connect the short leg of the LED (the negative leg, called the cathode) to the GND.

The value of the resistor in series with the LED may be of a different value than 220 ohm; the LED will lit up also with values up to 1K ohm.

![](https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_bb.png)

![schematic](https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_sch.png)
