for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
    basic.showIcon(IconNames.Chessboard)
    music.setVolume(255)
    music.playMelody("G F G A - F E D ", 120)
    basic.showIcon(IconNames.Butterfly)
    music.playMelody("F C A E G E F C5 ", 120)
    basic.showNumber(99999999999999)
    music.playMelody("B A G A G F A C5 ", 120)
    basic.showLeds(`
        # . # . .
        . # . # .
        . # # # .
        # . . # .
        . . # . #
        `)
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
}
