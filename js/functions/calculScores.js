import { resultatTirage } from "./tirages.js";

import {
  divScoreCourantJ1,
  divScoreCourantJ2,
  divScoreTotalJ1,
  divScoreTotalJ2,
  btnHold,
  btnRoll,
  divHistorique,
  divJoueurActif,
} from "../constants.js";

import { j1, j2 } from "../main.js";

//historique de la partie
export const historique = [];
export const currentJ1 = [];
export const currentJ2 = [];
var scoreCourantJ1 = 0;
var scoreCourantJ2 = 0;
var scoreTotalJ1 = 0;
var scoreTotalJ2 = 0;
var messageHistorique = "";

//Calcul et affichage du score provisoire
export const remplirScoreCourant = (joueurActif) => {
  //Si l'un des joueurs tire un "1" alors il perd son score courant
  if (joueurActif.getNumJoueur() === 1 && resultatTirage === 1) {
    j1.setScoreCourant(0);

    //vidage tableau de score courant
    currentJ1.length = 0;
    divScoreCourantJ1.textContent = 0;
    messageHistorique = `Le joueur 1 cède son tour avec un total provisoire de ${scoreTotalJ1} points, doit obtenir ${
      100 - scoreTotalJ1
    } pour gagner.`;
    barreInfo.innerHTML = messageHistorique;
    historique.push(messageHistorique);
    joueurActif.setNumJoueur(2);
    divJoueurActif.textContent = `Joueur ${joueurActif.getNumJoueur()} est le joueur actif`;    

    return joueurActif;
  }

  if (joueurActif.getNumJoueur() === 2 && resultatTirage === 1) {
    j2.setScoreCourant(0);
    //vidage tableau de score courant
    currentJ2.length = 0;
    divScoreCourantJ2.textContent = 0;
    messageHistorique = `Le joueur 2 cède son tour avec un total provisoire de ${scoreTotalJ2} points, doit obtenir ${
      100 - scoreTotalJ2
    } pour gagner.`;
    barreInfo.innerHTML = messageHistorique;
    historique.push(messageHistorique);
    joueurActif.setNumJoueur(1);
    divJoueurActif.textContent = `Joueur ${joueurActif.getNumJoueur()} est le joueur actif`;
    divJoueurActif.classList.add("animationScale");

    return joueurActif;
  }

  if (joueurActif.getNumJoueur() === 1 && resultatTirage > 1) {
    currentJ1.push(resultatTirage);
    scoreCourantJ1 = currentJ1.reduce((a, b) => a + b, 0);
    divScoreCourantJ1.textContent = scoreCourantJ1;
    j1.setScoreCourant(scoreCourantJ1);
    messageHistorique = `Le joueur 1 a tiré un ${resultatTirage}. Score provisoire = ${j1.getScoreCourant()}/100.`;
    barreInfo.innerHTML = messageHistorique;
    historique.push(messageHistorique);
    btnHold.disabled = false;
  }
  if (joueurActif.getNumJoueur() === 2 && resultatTirage > 1) {
    currentJ2.push(resultatTirage);
    scoreCourantJ2 = currentJ2.reduce((a, b) => a + b, 0);
    j2.setScoreCourant(scoreCourantJ2);
    divScoreCourantJ2.textContent = scoreCourantJ2;
    messageHistorique = `Le joueur 2 a tiré un ${resultatTirage}. Score provisoire = ${j2.getScoreCourant()}/100.`;
    barreInfo.innerHTML = messageHistorique;
    historique.push(messageHistorique);
    btnHold.disabled = false;
  }
};

export const afficherHistorique = () => {
 
  //On inverse le tableau d'historique
  const rows = historique.reverse().map((row) => {
    return `<p>${row}</p>`;
  });
  divHistorique.innerHTML = rows.join("");
};

//Calcul des scores totaux
export const calculScoresTotaux = (joueurActif) => {
  const calculJ1 = scoreCourantJ1 + scoreTotalJ1;
  const calculJ2 = scoreCourantJ2 + scoreTotalJ2;
  //Calcul score total du joueur 1 tant qu'inférieur à 100
  if (joueurActif.getNumJoueur() === 1 && calculJ1 < 100) {
    scoreTotalJ1 += scoreCourantJ1;
    divScoreTotalJ1.textContent = scoreTotalJ1;
    divScoreCourantJ1.textContent = 0;
    currentJ1.length = 0;
    messageHistorique = `Le joueur 1 a tiré un ${resultatTirage}. Score total = ${j1.getScoreCourant()}/100.`;
    barreInfo.innerHTML = messageHistorique;
    historique.push(messageHistorique);
    btnHold.disabled = true;

    //Changement de joueur
    joueurActif.setNumJoueur(2);
    divJoueurActif.textContent = `Joueur ${joueurActif.getNumJoueur()} est le joueur actif`;
    return joueurActif;
  }
  //Si joueur 1 obtient 100 points il gagne
  if (joueurActif.getNumJoueur() === 1 && calculJ1 === 100) {
    alert("Le joueur 1 a gagné la partie");
    btnHold.disabled = true;
    btnRoll.disabled = true;
  }
  //Calcul score total du joueur 2 tant qu'inférieur à 100
  if (joueurActif.getNumJoueur() === 2 && calculJ2 < 100) {
    scoreTotalJ2 += scoreCourantJ2;
    divScoreTotalJ2.textContent = scoreTotalJ2;
    divScoreCourantJ2.textContent = 0;
    currentJ2.length = 0;
    messageHistorique = `Le joueur 2 a tiré un ${resultatTirage}. Score total = ${j2.getScoreCourant()}/100.`;
    barreInfo.innerHTML = messageHistorique;
    historique.push(messageHistorique);
    btnHold.disabled = true;

    //Changement de joueur
    joueurActif.setNumJoueur(1);
    divJoueurActif.textContent = `Joueur ${joueurActif.getNumJoueur()} est le joueur actif`;
    return joueurActif;
  }
  if (joueurActif.getNumJoueur() === 2 && calculJ2 === 100) {
    alert("Le joueur 2 a gagné la partie");
    btnHold.disabled = true;
    btnRoll.disabled = true;
  }
};
