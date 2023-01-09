import { animerCube } from "./animationCube3d.js";
export var resultatTirage

export function tirage(){
  //Calcul des angles finaux d'affichage de face du dé
  const randomAngle = Math.floor(Math.random() * 6) + 1;
  resultatTirage = randomAngle;
  animerCube()
  return resultatTirage
};


