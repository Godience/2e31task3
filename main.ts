let go = 0
input.onButtonPressed(Button.A, function () {
    go = 9
    while (go > -1) {
        basic.showNumber(go)
        go += -1
    }
    while (go < 0) {
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    go = 0
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
