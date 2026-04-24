/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: Apr 2026
 * This program Servo
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

// A - direction (0°)
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 0)
    basic.showIcon(IconNames.Happy)
})

// B - direction (180°)
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)

    basic.showIcon(IconNames.Happy)
})
