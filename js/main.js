import Joueur from "./classes/Joueur.js";
import JoueurActif from "./classes/JoueurActif.js";
import { tirage } from "./functions/tirages.js";
import Timer  from "./classes/Timer.js"

//Instanciation chrono
export const t1 = new Timer("divTimer")

import {  
  btnHold,
  btnNewGame,
  btnRoll,
  divScoreCourantJ1,
  divScoreCourantJ2,
  divScoreTotalJ1,
  divScoreTotalJ2,
  divJoueurActif,
  joueur1,
  joueur2,
  btnDismmissGame,
  contScoreCourantJ1,
  contScoreCourantJ2
} from "./constants.js";
import {
  calculScoresTotaux,
  afficherHistorique,
  currentJ1,
  currentJ2,
  remplirScoreCourant,
  historique
} from "./functions/calculScores.js";
import * as modals from "./constants-modals.js"

const lienHistorique = document.querySelector('.lien-historique')
export const tapisJeu=document.querySelector('.tapis-jeu')

//Initialisation des variables des 2 joueurs
export const j1 = new Joueur(1, 0, 0);
export const j2 = new Joueur(2, 0, 0);
export var joueurActif = new JoueurActif();

//Constantes des modales personnalisées
const myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
const contenuModal = document.getElementById('contenu-modal')
const titreModal = document.getElementById('titre-modal')
const footerModal = document.querySelector(".modal-footer")

//Au démarrage de la page
window.onload = () => {
  barreInfo.innerHTML = `<p>Appuyer sur le bouton "Nouvelle partie" (touche "n") pour commencer</p>`;
  btnHold.classList.add("disabled");
  btnRoll.classList.add("disabled");
setTimeout(()=>{
  myModal.toggle()
  titreModal.textContent = modals.titre_modal_bienvenue
  contenuModal.innerHTML = modals.contenu_modal_bienvenue
},2000)
btnNewGame.classList.add('pulse')

};

//Détermine qui est le premier joueur par aléatoire
function premierJoueur() {
  joueurActif.setNumJoueur(Math.floor(Math.random() * 2) + 1);
  barreInfo.innerHTML = `<p>Le joueur ${joueurActif.getNumJoueur()} commence la partie.</p>
   <p>Appuyer sur le bouton " Lancer le dé " (barre espace)</p>`;
  divJoueurActif.innerHTML = `<p>Joueur ${joueurActif.getNumJoueur()} est le joueur actif</p>`;
  return joueurActif;
}
const initialiser = () => {
  //Obtenir un premier joueur de façon aléatoire
  premierJoueur();
  //Mise à zéro des champs, chrono et tableaux
  currentJ1.length = 0;
  currentJ2.length = 0;
  historique.length = 0;

  divScoreCourantJ1.textContent = 0;
  divScoreTotalJ1.textContent = 0;
  divScoreCourantJ2.textContent = 0;
  divScoreTotalJ2.textContent = 0;

  //remise à zéro chrono
  t1.reset()
  t1.start()

  emphase();
  afficherHistorique();
btnNewGame.classList.remove('pulse')
btnRoll.classList.add('pulse')

};

btnNewGame.addEventListener("click", () => {
  newGame()
});

const newGame = () => {
  //Si il existe une partie en cours, demande de confirmation par modale
  if (j1.getScoreCourant() > 0 || j2.getScoreCourant() > 0) {
    //Pause du chrono
    t1.stop()
    myModal.show()
    titreModal.textContent = modals.titre_modal_confirmation
    contenuModal.innerHTML = modals.contenu_modal_confirmation
    footerModal.innerHTML = modals.footer_modal_confirmation  
    const btnCloseModal = document.getElementById("btnNewGameFromModal")
    console.log(btnCloseModal) 
    btnCloseModal.addEventListener('click',()=>{
      t1.stop()
      t1.reset()
      myModal.hide()
      initialiser()
    })
  }

  //Nouvelle partie
  initialiser();
  btnRoll.classList.remove("disabled");
  divJoueurActif.classList.add("animationColor");
}

//Lancement du dé
btnRoll.addEventListener("click", (e) => {
  lancerDe()
});

const lancerDe = () => {
  btnHold.classList.remove("disabled");
  tirage();
  setTimeout(() => {
    remplirScoreCourant(joueurActif);
  }, 1400)
  contScoreCourantJ1.classList.remove('animationScores')
  contScoreCourantJ2.classList.remove('animationScores')
  tapisJeu.classList.remove('tapisJeuRouge') 
}

//Ajouter score courant au global du joueur actif
btnHold.addEventListener("click", () => {
  ajouterAuScoreTotal()
});

const ajouterAuScoreTotal = () => {
  calculScoresTotaux(joueurActif);
}

//Annulation et fin d'animation div joueur actif
divJoueurActif.addEventListener('animationend', () => {
  divJoueurActif.classList.remove("animationColor")
})

//Affiche l'historique de la partie dans une modale
lienHistorique.addEventListener('click', () => {
afficherModaleHistorique()})

const afficherModaleHistorique=()=>{
  myModal.show()
  titreModal.textContent = modals.titre_modal_historique
  if (historique.length == 0) {
    contenuModal.innerHTML = "Il n'existe aucun historique à afficher dans la partie en cours."
  } else {
    contenuModal.innerHTML = `${afficherHistorique()}`
  }
  footerModal.innerHTML = modals.footer_modal_historique
}


//Emphase visuelle css sur les scores pour signaler le joueur actif
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

//Abandonner partie
btnDismmissGame.addEventListener('click',()=>{
  //Mise à zéro des champs, chrono et tableaux
  currentJ1.length = 0;
  currentJ2.length = 0;
  historique.length = 0;

  divScoreCourantJ1.textContent = 0;
  divScoreTotalJ1.textContent = 0;
  divScoreCourantJ2.textContent = 0;
  divScoreTotalJ2.textContent = 0;

  //remise à zéro chrono
  t1.reset()

  //Arrêt/démarrage animation des boutons
  btnRoll.classList.remove('pulse')
  btnNewGame.classList.add('pulse')
  btnHold.classList.remove('shake')
  btnHold.classList.add("disabled");
  btnRoll.classList.add("disabled");
})

//Ecoute du clavier
document.addEventListener('keyup', (e) => {
  console.log(e.code)
  switch (e.code) {
    case "KeyN":
      newGame()
      break
    case "Space":
      lancerDe()
      break
    case "KeyH":
      afficherModaleHistorique()
      break
    case "Enter", "ArrowUp":
      ajouterAuScoreTotal()
      break
    default:
      return
  }
})

