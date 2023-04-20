import {
  resultatTirage
} from "./tirages.js";
import {
  divScoreCourantJ1,
  divScoreCourantJ2,
  divScoreTotalJ1,
  divScoreTotalJ2,
  btnHold,
  btnRoll,
  divJoueurActif,
  contScoreCourantJ1,
  contScoreCourantJ2
} from "../constants.js";
import {
  t1,
  j1,
  j2,
  emphase,
  tapisJeu
} from "../main.js";

//historique de la partie et variables de scores
export const historique = [];
export const currentJ1 = [];
export const currentJ2 = [];

var scoreCourantJ1 = 0;
var scoreCourantJ2 = 0;
var scoreTotalJ1 = 0;
var scoreTotalJ2 = 0;
var msgHistorique = "";

import * as modals from "../constants-modals.js"

//Calcul et affichage du score provisoire
export const remplirScoreCourant = (joueurActif) => {
  //Si l'un des joueurs tire un "1" alors il perd son score courant et passe son tour
  if (joueurActif.getNumJoueur() === 1 && resultatTirage === 1) {
   
    j1.setScoreCourant(0);

    //vidage tableau de score courant
    currentJ1.length = 0;
    divScoreCourantJ1.textContent = 0;
    contScoreCourantJ1.classList.add('animationScores')
    msgHistorique = `<p>- [${t1.getCurrentTimer()}] => Le joueur 1 cède son tour avec un score total de ${j1.getScoreGlobal()} points, doit obtenir ${100 - j1.getScoreGlobal()
      } pour gagner.</p>`;
    barreInfo.innerHTML = msgHistorique;
    historique.push(msgHistorique);
    joueurActif.setNumJoueur(2);
    divJoueurActif.textContent = `- Joueur ${joueurActif.getNumJoueur()} est le joueur actif`;
    emphase()
    tapisJeu.classList.add('tapisJeuRouge') 
    btnHold.classList.remove('shake')

    return joueurActif;
  }

  if (joueurActif.getNumJoueur() === 2 && resultatTirage === 1) {
   
    j2.setScoreCourant(0);
    //vidage tableau de score courant
    currentJ2.length = 0;
    divScoreCourantJ2.textContent = 0;
    contScoreCourantJ2.classList.add('animationScores')
    msgHistorique = `<p>- [${t1.getCurrentTimer()}] => Le joueur 2 cède son tour avec un total provisoire de ${j2.getScoreGlobal()} points, doit obtenir ${100 - j2.getScoreGlobal()} points pour gagner.</p>`;
    barreInfo.innerHTML = msgHistorique;
    historique.push(msgHistorique);
    joueurActif.setNumJoueur(1);
    emphase()
    divJoueurActif.textContent = `- Joueur ${joueurActif.getNumJoueur()} est le joueur actif`;
    divJoueurActif.classList.add("animationScale");
    tapisJeu.classList.add('tapisJeuRouge')        
    btnHold.classList.remove('shake')
    return joueurActif;
  }

  if (joueurActif.getNumJoueur() === 1 && resultatTirage > 1) {
    
    currentJ1.push(resultatTirage);
    scoreCourantJ1 = currentJ1.reduce((a, b) => a + b, 0);
    divScoreCourantJ1.textContent = scoreCourantJ1;
    contScoreCourantJ1.classList.add('animationScores')
    j1.setScoreCourant(scoreCourantJ1);
    msgHistorique = `<p>- [${t1.getCurrentTimer()}] => Le joueur 1 a tiré un ${resultatTirage}.</p><p>Score provisoire = ${j1.getScoreCourant()}.</p>`;
    barreInfo.innerHTML = msgHistorique;
    historique.push(msgHistorique);
    btnHold.disabled = false;
    btnHold.classList.add('shake')
  }
  if (joueurActif.getNumJoueur() === 2 && resultatTirage > 1) {
    
    currentJ2.push(resultatTirage);
    scoreCourantJ2 = currentJ2.reduce((a, b) => a + b, 0);
    j2.setScoreCourant(scoreCourantJ2);
    divScoreCourantJ2.textContent = scoreCourantJ2;
    contScoreCourantJ2.classList.add('animationScores')
    msgHistorique = `<p>- [${t1.getCurrentTimer()}] => Le joueur 2 a tiré un ${resultatTirage}.</p><p>Score provisoire = ${j2.getScoreCourant()}.</p>`;
    barreInfo.innerHTML = msgHistorique;
    historique.push(msgHistorique);
    btnHold.disabled = false;
    btnHold.classList.add('shake')
  }
};

//Calcul des scores totaux
export const calculScoresTotaux = (joueurActif) => {

  const calculJ1 = scoreCourantJ1 + scoreTotalJ1;
  const calculJ2 = scoreCourantJ2 + scoreTotalJ2;

  //Calcul score total du joueur 1 tant qu'inférieur à 100
  if (joueurActif.getNumJoueur() === 1 && calculJ1 < 100) {
   
    scoreTotalJ1 += scoreCourantJ1;
    j1.setScoreGlobal=scoreTotalJ1
    divScoreTotalJ1.textContent = scoreTotalJ1;
    divScoreCourantJ1.textContent = 0;
    currentJ1.length = 0;
    msgHistorique = `<p>- [${t1.getCurrentTimer()}] => Le joueur 1 a tiré un ${resultatTirage}.</p><p>Score total = ${j1.getScoreGlobal()}/100.</p>`;
    barreInfo.innerHTML = msgHistorique;
    historique.push(msgHistorique);
    btnHold.disabled = true;
    btnHold.classList.remove('shake')

    //Changement de joueur / passage de tour
    joueurActif.setNumJoueur(2);
    emphase()
    divJoueurActif.innerHTML = `<p>- Joueur ${joueurActif.getNumJoueur()} est le joueur actif<p>`;
    return joueurActif;
  }

  //Si joueur 1 obtient 100 points il gagne, affichage modale victoire
  if (joueurActif.getNumJoueur() === 1 && calculJ1 === 100) {
    
    myModal.show()
    modals.titre_modal_fin_partie
    modals.modal_afficher_vainqueur(numjoueur)
    btnHold.disabled = true;
    btnRoll.disabled = true;
  }

  //Calcul score total du joueur 2 tant qu'inférieur à 100
  if (joueurActif.getNumJoueur() === 2 && calculJ2 < 100) {
    
    scoreTotalJ2 += scoreCourantJ2;
    j2.setScoreGlobal=scoreTotalJ2
    divScoreTotalJ2.textContent = scoreTotalJ2;
    divScoreCourantJ2.textContent = 0;
    currentJ2.length = 0;
    msgHistorique = `<p>- [${t1.getCurrentTimer()}] => Le joueur 2 a tiré un ${resultatTirage}.</p><p>Score total = ${j2.getScoreGlobal()}/100.</p>`;
    barreInfo.innerHTML = msgHistorique;
    historique.push(msgHistorique);
    btnHold.disabled = true;
    btnHold.classList.remove('shake')

    //Changement de joueur 
    joueurActif.setNumJoueur(1);
    emphase()
    divJoueurActif.innerHTML = `<p>- Joueur ${joueurActif.getNumJoueur()} est le joueur actif</p>`;
    return joueurActif;
  }
  //Si le joueur 2 obtient 100 points il gagne,
  // affichage modale victoire
  if (joueurActif.getNumJoueur() === 2 && calculJ2 === 100) {
    
    myModal.show()
    modals.titre_modal_fin_partie
    modals.modal_afficher_vainqueur(numjoueur)
    btnHold.disabled = true;
    btnRoll.disabled = true;
  }
};

export const afficherHistorique = () => {

  //On inverse le tableau d'historique
  const rows = historique.reverse().map((row) => {
    return `${row}`;
  });
  return rows.join("");
};