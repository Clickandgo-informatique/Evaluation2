const cube = document.getElementById('cube')
const btnRoll = document.getElementById('btn-roll')
const btnNewGame = document.getElementById('btn-new-game')
const joueur1 = document.getElementById('joueur1')
const joueur2 = document.getElementById('joueur2')
const divScoreCourantJ1 = document.querySelector('#score-courant-joueur1 h4')
const divScoreTotalJ1 = document.querySelector('#score-total-joueur1 h4')
// const scoreTotalJ1 = null
console.log(divScoreTotalJ1)
const pointsJ1 = []
const pointsJ2 = []

angleArray = [
    [0, 0, 0],
    [-310, -362, -38],
    [-400, -320, -2],
    [135, -217, -88],
    [-224, -317, 5],
    [-47, -219, -81],
    [-133, -360, -53]
];

const premierJoueur = (joueur) => {

    joueur = Math.floor(Math.random() * 2 + 1)
    console.log(`Joueur ${joueur} commence.`)
    return joueur
}

btnRoll.addEventListener('click', () => {
    const randomAngle = Math.floor(Math.random() * 6) + 1
    const resultatTirage = (randomAngle) => {

        switch (randomAngle) {
            case 1:
                return "Vous avez tiré le chiffre un !"
            case 2:
                return "Vous avez tiré le chiffre deux !"
            case 3:
                return "Vous avez tiré le chiffre trois !"
            case 4:
                return "Vous avez tiré le chiffre quatre !"
            case 5:
                return "Vous avez tiré le chiffre cinq !"
            case 6:
                return "Vous avez tiré le chiffre six !"
            default:
                return "Veuillez tirer le dè"
        }
    }
    //Remplir tableau de score courant du joueur actif
    pointsJ1.push(randomAngle)
    //Calcul du total
    const scoreTotalJ1 = pointsJ1.reduce((a, b) => a + b)
    divScoreTotalJ1.innerHTML = scoreTotalJ1
    divScoreCourantJ1.innerHTML=randomAngle

    console.log(pointsJ1)
    console.log(scoreTotalJ1)

    /*ANIMATION */
    cube.style.animation = 'animate 1.4s linear';
    //console.log(randomAngle);
    cube.style.transform = 'rotateX(' + angleArray[randomAngle][0] + 'deg) rotateY(' + angleArray[randomAngle][1] + 'deg) rotateZ(' + angleArray[randomAngle][2] + 'deg)';
    cube.style.transition = '1s linear'

    cube.addEventListener('animationend', function (e) {
        cube.style.animation = '';
    });
})

//Nouvelle partie
btnNewGame.addEventListener('click', () => {
    //Mise à zéro des champs et tableaux
    pointsJ1 = []
    pointsJ2 = []

    //Remise à zéro de la bordure pour les deux champs
    if (joueur1.classList.contains("selection")) {
        joueur1.classList.remove("selection")
    }
    if (joueur2.classList.contains("selection")) {
        joueur2.classList.remove("selection")
    }

    //Tirage au sort du joueur débutant la partie (fonction: "premierJoueur")
    let joueurActif = premierJoueur()
    //Application d'une bordure distinctive au joueur actif
    switch (joueurActif) {
        case 1:
            joueur1.classList.add("selection")
            joueur2.classList.remove("selection")
        case 2:
            joueur2.classList.add("selection")
            joueur1.classList.remove("selection")
        default:
            console.log("joueur actif = " + joueurActif)
            return
    }
})