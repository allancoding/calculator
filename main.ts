function maincacu () {
    if (cacul1 == true) {
        basic.showNumber(cacuvar1)
    } else if (cacul2 == true) {
        basic.showNumber(cacuvar2)
    } else if (cacul3 == true) {
        basic.showNumber(cacuvar3)
    } else if (cacul4 == true) {
        basic.showNumber(cacuvar4)
    } else if (cacul5 == true) {
        basic.showNumber(cacuvar5)
    }
    if (cacuop1 == true) {
        showcacuop()
    } else if (cacuop2 == true) {
        showcacuop()
    } else if (cacuop3 == true) {
        showcacuop()
    } else if (cacuop4 == true) {
        showcacuop()
    }
}
function changecaucop1 () {
    if (C == true) {
        C = false
        C2 = true
    } else if (C2 == true) {
        C2 = false
        C3 = true
    } else if (C3 == true) {
        C3 = false
        Cx = true
    } else if (Cx == true) {
        Cx = false
        if (cacuop1 == true) {
            C = true
        } else {
            C4 = true
        }
    } else if (C4 == true) {
        C4 = false
        C = true
    }
}
input.onButtonPressed(Button.A, function () {
    if (startcacu == true) {
        if (cacul1 == true) {
            cacuvar1 += -1
        } else if (cacuop1 == true) {
            changecaucop12()
        } else if (cacul2 == true) {
            cacuvar2 += -1
        } else if (cacuop2 == true) {
            changecaucop12()
        } else if (cacul3 == true) {
            cacuvar3 += -1
        } else if (cacuop3 == true) {
            changecaucop12()
        } else if (cacul4 == true) {
            cacuvar4 += -1
        } else if (cacuop4 == true) {
            resetcacu()
        } else if (cacul5 == true) {
            resetcacu()
        }
        basic.clearScreen()
    }
})
function showcacuop () {
    if (C == true) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (C2 == true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (C3 == true) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (Cx == true) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (C4 == true) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (startcacu == true) {
        if (cacul5 == true) {
            resetcacu()
        } else if (cacuop1 == true) {
            cacuop1 = false
            cacuop2 = false
            cacul2 = true
        } else if (cacul2 == true) {
            cacul2 = false
            cacuop2 = true
            if (C == true) {
                cacuvar2 = cacuvar1 + cacuvar2
            } else if (C2 == true) {
                cacuvar2 = cacuvar1 - cacuvar2
            } else if (C3 == true) {
                cacuvar2 = cacuvar1 / cacuvar2
            } else if (Cx == true) {
                cacuvar2 = cacuvar1 * cacuvar2
            }
            Cx = false
            C = false
            C2 = false
            C3 = false
            C4 = true
        } else if (cacuop2 == true) {
            if (C4 == true) {
                cacuvar5 = cacuvar2
                cacul5 = true
            } else {
                cacul3 = true
            }
            cacuop2 = false
        } else if (cacul3 == true) {
            cacul3 = false
            if (C == true) {
                cacuvar3 = cacuvar2 + cacuvar3
            } else if (C2 == true) {
                cacuvar3 = cacuvar2 - cacuvar3
            } else if (C3 == true) {
                cacuvar3 = cacuvar2 / cacuvar3
            } else if (Cx == true) {
                cacuvar3 = cacuvar2 * cacuvar3
            }
            Cx = false
            C = false
            C2 = false
            C3 = false
            C4 = true
            cacuop3 = true
        } else if (cacuop3 == true) {
            if (C4 == true) {
                cacuvar5 = cacuvar3
                cacul5 = true
            } else {
                cacul4 = true
            }
            cacuop3 = false
        } else if (cacul4 == true) {
            if (C == true) {
                cacuvar4 = cacuvar3 + cacuvar4
            } else if (C2 == true) {
                cacuvar4 = cacuvar3 - cacuvar4
            } else if (C3 == true) {
                cacuvar4 = cacuvar3 / cacuvar4
            } else if (Cx == true) {
                cacuvar4 = cacuvar3 * cacuvar4
            }
            C = false
            C2 = false
            C3 = false
            Cx = false
            C4 = true
            cacul4 = false
            cacuop4 = true
        } else if (cacuop4 == true) {
            cacuop4 = false
            cacuvar5 = cacuvar4
            cacul5 = true
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (startcacu == true) {
        if (cacul1 == true) {
            cacuvar1 += 1
        } else if (cacuop1 == true) {
            changecaucop1()
        } else if (cacul2 == true) {
            cacuvar2 += 1
        } else if (cacuop2 == true) {
            changecaucop1()
        } else if (cacul3 == true) {
            cacuvar3 += 1
        } else if (cacuop3 == true) {
            changecaucop1()
        } else if (cacul4 == true) {
            cacuvar4 += 1
        } else if (cacuop4 == true) {
            resetcacu()
        } else if (cacul5 == true) {
            resetcacu()
        }
        basic.clearScreen()
    }
})
function resetcacu () {
    control.reset()
}
function changecaucop12 () {
    if (C == true) {
        if (cacuop1 == true) {
            Cx = true
        } else {
            C4 = true
        }
        C = false
    } else if (C2 == true) {
        C2 = false
        C = true
    } else if (C3 == true) {
        C3 = false
        C2 = true
    } else if (Cx == true) {
        Cx = false
        C3 = true
    } else if (C4 == true) {
        C4 = false
        Cx = true
    }
}
let C4 = false
let C3 = false
let C2 = false
let C = false
let Cx = false
let cacuop4 = false
let cacuop3 = false
let cacuop2 = false
let cacuop1 = false
let cacul5 = false
let cacul4 = false
let cacul3 = false
let cacul2 = false
let cacul1 = false
let cacuvar5 = 0
let cacuvar4 = 0
let cacuvar3 = 0
let cacuvar2 = 0
let cacuvar1 = 0
let startcacu = false
startcacu = true
cacuvar1 = 0
cacuvar2 = 0
cacuvar3 = 0
cacuvar4 = 0
cacuvar5 = 0
cacul1 = true
cacul2 = false
cacul3 = false
cacul4 = false
cacul5 = false
cacuop1 = false
cacuop2 = false
cacuop3 = false
cacuop4 = false
Cx = false
C = true
C2 = false
C3 = false
C4 = false
basic.forever(function () {
    if (startcacu == true) {
        maincacu()
    }
})
