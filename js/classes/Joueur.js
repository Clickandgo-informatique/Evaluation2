export default class Joueur {
  
  constructor(numJoueur, scoreCourant, scoreGlobal) {
    this.numJoueur = numJoueur;
    this.scoreCourant = scoreCourant;
    this.scoreGlobal = scoreGlobal;    
  }  
  
  getScoreGlobal() {
    return this.scoreGlobal;
  }
  setScoreGlobal(scoreGlobal) {
    this.scoreGlobal = scoreGlobal;
  }
  setNumJoueur(numJoueur) {
    this.numJoueur = numJoueur;
  }
  getNumJoueur() {
    return this.numJoueur;
  }
  /**
   * getter du scoreCourant
   */
  getScoreCourant() {
    return this.scoreCourant;
  }
  /**
   * setter du scoreCourant
   */
  setScoreCourant(scoreCourant) {
    this.scoreCourant = scoreCourant;
  }
}
