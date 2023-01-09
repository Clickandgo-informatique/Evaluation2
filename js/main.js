import Joueur from "./classes/Joueur.js";
import { tirage } from "./functions/tirages.js";
import {
  angleArray,
  btnHold,
  btnNewGame,
  btnRoll,
  checkHistorique,
  divHistorique,
  divScoreCourantJ1,
  divScoreCourantJ2,
  divScoreTotalJ1,
  divScoreTotalJ2,
} from "./constants.js";
import {
  calculScoresTotaux,
  afficherHistorique,
  currentJ1,
  currentJ2,
  historique,
  remplirScoreCourant
} from "./functions/calculScores.js";

export var joueurActif;

//Initialisation des variables des 2 joueurs
export const j1 = new Joueur(1, 0, 0);
export const j2 = new Joueur(2, 0, 0);

//Au démarrage de la page
window.onload = () => {
  barreInfo.innerHTML = `<h4>Appuyer sur le bouton "nouvelle partie" pour commencer</h4>`;
  btnHold.classList.add("disabled");
  btnRoll.classList.add("disabled");
  checkHistorique.checked = false;
};

//Détermine qui est le premier joueur par aléatoire
function premierJoueur() {
  joueurActif = Math.floor(Math.random() * 2) + 1;
  barreInfo.innerHTML = `<h4>Le joueur ${joueurActif} commence la partie</h4>`;
  return joueurActif;
}
const initialiser = () => {
  //Obtenir un premier joueur de façon aléatoire
  premierJoueur();
  //Mise à zéro des champs et tableaux
  currentJ1.length = 0;
  currentJ2.length = 0;
  historique.length = 0;

  divScoreCourantJ1.textContent = 0;
  divScoreTotalJ1.textContent = 0;
  divScoreCourantJ2.textContent = 0;
  divScoreTotalJ2.textContent = 0;
};

btnNewGame.addEventListener("click", () => {
  //Nouvelle partie
  initialiser();
  btnRoll.classList.remove("disabled");
  console.log("Joueur actif depuis btnNewGame = " + joueurActif);
});

//Lancement du dé
btnRoll.addEventListener("click", () => {
  btnHold.classList.remove("disabled");
  tirage();
  remplirScoreCourant(joueurActif);
  console.log("Joueur actif depuis bouton btnRoll = " + joueurActif);
  //Si l'option est sélectionnée l'historique de
  // la partie est affiché
  if (checkHistorique.checked === true) {
    divHistorique.style.display = "block";
    afficherHistorique();
  } else {
    divHistorique.style.display = "none";
  }
});
