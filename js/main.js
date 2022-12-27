import Joueur from './classes/Joueur.js'

const barreInfo = document.getElementById('barreInfo')
const cube = document.getElementById('cube')
const btnRoll = document.getElementById('btn-roll')
const btnHold = document.getElementById('btn-hold')
const btnNewGame = document.getElementById('btn-new-game')
const joueur1 = document.getElementById('joueur1')
const joueur2 = document.getElementById('joueur2')
const divScoreCourantJ1 = document.querySelector('#score-courant-joueur1 h4')
const divScoreTotalJ1 = document.querySelector('#score-total-joueur1 h4')
const divScoreCourantJ2 = document.querySelector('#score-courant-joueur2 h4')
const divScoreTotalJ2 = document.querySelector('#score-total-joueur2 h4')

//historique de la partie
const historique = []

var joueurActif
var resultatTirage = 0

const currentJ1 = []
const currentJ2 = []

var scoreCourantJ1 = 0
var scoreCourantJ2 = 0

var scoreTotalJ1 = 0
var scoreTotalJ2 = 0

const angleArray = [
    [0, 0, 0],
    [-310, -362, -38],
    [-400, -320, -2],
    [135, -217, -88],
    [-224, -317, 5],
    [-47, -219, -81],
    [-133, -360, -53]
];

const tirage = () => {
    //Calcul des angles finaux d'affichage de face du dé
    const randomAngle = Math.floor(Math.random() * 6) + 1
    /*ANIMATION */
    cube.style.animation = 'animate 1.4s linear';
    //console.log(randomAngle);
    cube.style.transform = 'rotateX(' + angleArray[randomAngle][0] + 'deg) rotateY(' + angleArray[randomAngle][1] + 'deg) rotateZ(' + angleArray[randomAngle][2] + 'deg)';
    cube.style.transition = '1s linear'

    cube.addEventListener('animationend', function (e) {
        cube.style.animation = '';
    })

    // const resultatTirage = (randomAngle) => {

    //     switch (randomAngle) {
    //         case 1:
    //             return "Vous avez tiré le chiffre un !"
    //         case 2:
    //             return "Vous avez tiré le chiffre deux !"
    //         case 3:
    //             return "Vous avez tiré le chiffre trois !"
    //         case 4:
    //             return "Vous avez tiré le chiffre quatre !"
    //         case 5:
    //             return "Vous avez tiré le chiffre cinq !"
    //         case 6:
    //             return "Vous avez tiré le chiffre six !"
    //         default:
    //             return "Veuillez tirer le dè"
    //     }
    // }
    // console.log(randomAngle)
    resultatTirage = randomAngle
    return resultatTirage
}

//Remplir tableau de score courant du joueur actif 
const remplirScoreCourant = () => {
    //Si le joueur actif tire un "1", il perd son score courant (scoreCourant), son score courant est
    //remis à zéro et il doit passer son tour

    if (joueurActif == 1) {
        if (resultatTirage == 1) {
            currentJ1.length = 0
            scoreCourantJ1 = 0
            //constitution de l'historique de la partie
            historique.push([`Le joueur ${joueurActif} a tiré un 1 : il doit passer son tour, score total = ${scoreTotalJ1} points.`])
            divScoreCourantJ1.textContent = 0
            joueurActif = 2
            console.log(historique)

        } else {

            currentJ1.push(resultatTirage)
            //Calcul total joueur 1
            scoreCourantJ1 = currentJ1.reduce((a, b) => a + b)
            divScoreCourantJ1.textContent = scoreCourantJ1
            //constitution de l'historique de la partie
            historique.push([`Le joueur ${joueurActif} tire un ${resultatTirage} score courant = ${scoreCourantJ1}/100 score total = ${scoreTotalJ1} points.`])
            console.log(historique)
        }

    } else {

        if (resultatTirage == 1) {
            currentJ2.length = 0
            scoreCourantJ2 = 0
            //constitution de l'historique de la partie
            historique.push([`Le joueur ${joueurActif} a tiré un 1 : il doit passer son tour, score total = ${scoreTotalJ2} points.`])
            divScoreCourantJ2.textContent = 0
            joueurActif = 1
            console.log(historique)

        } else {

            //Calcul total temporaire joueur 2
            currentJ2.push(resultatTirage)
            scoreCourantJ2 = currentJ2.reduce((a, b) => a + b)
            divScoreCourantJ2.textContent = scoreCourantJ2
            //constitution de l'historique de la partie
            historique.push([`Le joueur ${joueurActif} tire un ${resultatTirage}, score courant = ${scoreCourantJ2}/100 score total = ${scoreTotalJ2} points.`])
            console.log(historique)
        }
    }
}

const initialiser = () => {
    //Interroge la méthode contenue dans la classe Joueur
    //pour obtenir un premier joueur de façon aléatoire
    const j = new Joueur()
    joueurActif = j.premierJoueur
    console.log("joueur actif : " + joueurActif)
    return joueurActif
}

btnNewGame.addEventListener('click', () => {
    //Nouvelle partie

    initialiser()
    //Mise à zéro des champs et tableaux
    currentJ1.length = 0
    currentJ2.length = 0
    historique.length = 0

    divScoreCourantJ1.textContent = 0
    divScoreTotalJ1.textContent = 0
    divScoreCourantJ2.textContent = 0
    divScoreTotalJ2.textContent = 0
})

//Lancement du dé
btnRoll.addEventListener('click', () => {
    btnHold.disabled = false
    tirage()
    remplirScoreCourant(joueurActif)
})

//Calcul du total temporaire pour chaque joueur et addition au score global
btnHold.addEventListener('click', () => {

    btnHold.disabled = true
    
    if (joueurActif == 1) {
        scoreTotalJ1 += scoreCourantJ1
        divScoreTotalJ1.textContent = scoreTotalJ1
        divScoreCourantJ1.textContent = 0
        barreInfo.innerHTML = `Le joueur 1 cède son tour avec un total provisoire de ${scoreTotalJ1} points, doit obtenir ${100-scoreTotalJ1} pour gagner.`
        currentJ1.length = 0
        joueurActif = 2

    } else {
    
        scoreTotalJ2 += scoreCourantJ2        
        divScoreTotalJ2.textContent = scoreTotalJ2
        divScoreCourantJ2.textContent = 0
        barreInfo.innerHTML = `Le joueur 2 cède son tour avec un total provisoire de ${scoreTotalJ2} points, doit obtenir ${100-scoreTotalJ2} pour gagner.`
        currentJ2.length = 0
        joueurActif = 1
    }
})