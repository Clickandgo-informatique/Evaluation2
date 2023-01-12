/*ANIMATION */
import {
  angleArray
} from "../constants.js";
import {
  resultatTirage
} from "./tirages.js"

export const animerCube = () => {
  cube.style.animation = "animate 1.4s linear";
  cube.style.transform =
    "rotateX(" +
    angleArray[resultatTirage][0] +
    "deg) rotateY(" +
    angleArray[resultatTirage][1] +
    "deg) rotateZ(" +
    angleArray[resultatTirage][2] +
    "deg)";
  cube.style.transition = "1s linear";

  cube.addEventListener("animationend", function () {
    cube.style.animation = "";
  });
};