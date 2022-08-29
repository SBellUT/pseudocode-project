input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("great!")
})
basic.forever(function () {
	
})
