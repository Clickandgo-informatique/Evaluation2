import Joueur from "./classes/Joueur.js";
import JoueurActif from "./classes/JoueurActif.js";
import {
  tirage
} from "./functions/tirages.js";
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
  divJoueurActif,
  joueur1,
  joueur2
} from "./constants.js";
import {
  calculScoresTotaux,
  afficherHistorique,
  currentJ1,
  currentJ2,
  historique,
  remplirScoreCourant,
} from "./functions/calculScores.js";
import * as modals from "./constants-modals.js"

//Initialisation des variables des 2 joueurs
export const j1 = new Joueur(1, 0, 0);
export const j2 = new Joueur(2, 0, 0);
export var joueurActif = new JoueurActif();
const myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
const contenuModal = document.getElementById('contenu-modal')
const titreModal = document.getElementById('titre-modal')
const footerModal = document.querySelector(".modal-footer")


//Au démarrage de la page
window.onload = () => {
  barreInfo.innerHTML = `Appuyer sur le bouton "Nouvelle partie" pour commencer`;
  btnHold.classList.add("disabled");
  btnRoll.classList.add("disabled");
  checkHistorique.checked = false;

  myModal.toggle()
  titreModal.textContent = modals.titre_modal_bienvenue
  contenuModal.innerHTML = modals.contenu_modal_bienvenue

};

//Détermine qui est le premier joueur par aléatoire
function premierJoueur() {
  joueurActif.setNumJoueur(Math.floor(Math.random() * 2) + 1);
  barreInfo.innerHTML = `<h4>Le joueur ${joueurActif.getNumJoueur()} commence la partie</h4>`;
  divJoueurActif.textContent = `Joueur ${joueurActif.getNumJoueur()} est le joueur actif`;
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

  emphase();
  afficherHistorique();
};

btnNewGame.addEventListener("click", () => {
  //Si il existe une partie en cours, demande de confirmation par modale
  if (j1.getScoreCourant() > 0 || j2.getScoreCourant() > 0) {

    myModal.show()
    titreModal.textContent = modals.titre_modal_confirmation
    contenuModal.innerHTML = modals.contenu_modal_confirmation
    footerModal.innerHTML = modals.footer_modal_confirmation
  } else {
    newGame()
  }
});
const newGame = () => {  
  
  //Nouvelle partie
  initialiser();
  btnRoll.classList.remove("disabled");
  divJoueurActif.classList.add("animationColor");
  // divJoueurActif.classList.remove("animationScale");
}

//Lancement du dé
btnRoll.addEventListener("click", () => {
  btnHold.classList.remove("disabled");
  tirage();
  setTimeout(() => {
    remplirScoreCourant(joueurActif);
  }, 1400)

  //Si l'option est sélectionnée l'historique de
  // la partie est affiché
  if (checkHistorique.checked === true) {
    divHistorique.style.display = "block";
    afficherHistorique();
  } else {
    divHistorique.style.display = "none";
  }
});

//Ajouter score courant au global du joueur actif
btnHold.addEventListener("click", () => {
  calculScoresTotaux(joueurActif);
  afficherHistorique();
});

divJoueurActif.addEventListener('animationend', () => {
  divJoueurActif.classList.remove("animationColor")
})

//Emphase visuelle sur les scores pour signaler le joueur actif
export const emphase = () => {

  if (joueurActif.getNumJoueur() === 1) {
    joueur1.classList.add('selection')
    joueur1.classList.remove('deselection')
    joueur2.classList.add('deselection')
    joueur2.classList.remove('selection')
  } else {
    joueur1.classList.remove('selection')
    joueur1.classList.add('deselection')
    joueur2.classList.add('selection')
    joueur2.classList.remove('deselection')
  }

}