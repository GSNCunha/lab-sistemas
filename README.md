
# Digital Systems Laboratory Project

This project was developed for the Digital Systems Laboratory course at UFRGS. The objective was to create a project connecting an FPGA — specifically a DE2 board — to an Arduino via a serial connection, and to implement functionality for this communication.

## Project Overview

The project consists of a server running on a computer, built with React and TypeScript. This server displays an image of the FPGA board, and the user can interact with the first four LEDs on the board using mouse input. The LEDs' brightness can be adjusted to four levels: 0%, 25%, 75%, and 100%. The LED states are stored in an online MongoDB database using GraphQL.

On the same computer or another one, a second server retrieves the LED states from the database and sends this information via a serial connection to an Arduino Mega connected to the FPGA. The FPGA then updates the physical LEDs in real-time based on programmable logic controller (PLC) style analog programming logic.

Additionally, the board’s input switches can modify the LEDs' states by representing the binary equivalent of their activation. These physical changes on the board are sent back to the computer, updating both the database and the user interaction server, which reflects the new LED states.

## Global Control

This setup allows the FPGA board to be controlled from any computer worldwide.

## Demo

You can see the project in action here: [Project Video](https://youtu.be/CoUZMIXGW-w)

