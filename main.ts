basic.forever(function () {
    if (randint(0, 20) > 16) {
        basic.showNumber(60 / 30)
    } else if (randint(0, 30) == 10) {
        basic.showIcon(IconNames.Heart)
        basic.showString("congrats！")
        control.reset()
    } else if (randint(0, 20) < 7) {
        basic.showNumber(3)
    } else {
        basic.showNumber(3 - 2)
    }
})
