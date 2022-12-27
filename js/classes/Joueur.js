export default class Joueur {

    currentJ1 = []
    currentJ2 = []

    constructor(numJoueur, tblScoreCourant, tblScoreGlobal) {
        this.numJoueur = numJoueur
        this.tblScoreCourant = tblScoreCourant
        this.tblScoreGlobal = tblScoreGlobal
    }

    get scoreCourant() {
        return this.scoreCourant
    }
    get scoreGlobal() {
        return this.scoreGlobal
    }
    set numJoueur(numJoueur) {
        this._numJoueur = numJoueur
    }
    get numJoueur() {
        return this._numJoueur
    }
    set scoreCourant(scoreCourant) {
        this.scoreCourant = scoreCourant
    }
    set scoreGlobal(scoreGlobal) {
        this.scoreGlobal = scoreGlobal
    }
    set tblScoreCourant(tblScoreCourant) {
        this._tblScoreCourant = tblScoreCourant

    }
    get tblScoreCourant() {
        return this._tblScoreCourant
    }

    set tblScoreGlobal(tblScoreGlobal) {
        this._tblScoreGlobal = tblScoreGlobal
    }

    get tblScoreGlobal() {
        return this._tblScoreGlobal
    }

    //Détermine qui est le premier joueur par aléatoire
    get premierJoueur() {        
        this.numJoueur = Math.floor(Math.random() * 2 + 1)    
        barreInfo.innerHTML = `<h4>Le joueur ${this.numJoueur} commence la partie</h4>`       
        return this.numJoueur        
    }
}


