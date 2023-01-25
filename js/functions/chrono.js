import {divChrono} from "../constants.js"

var sec = 0
var heures = 0
var min = 0
export var t

const tick = () => {
    sec++
    if (sec >= 60) {
        sec = 0
        min++
        if (min >= 60) {
            min++
            heures++
        }
    }
}

const ajout = () => {
    tick()
    divChrono.textContent = (heures > 9 ? heures : "0" + heures) +
        ":" + (min > 9 ? min : "0" + min) +
        ":" + (sec > 9 ? sec : "0" + sec)
    timer()
}

export const timer = () => {
    t = setTimeout(ajout, 1000)
}
