const cube = document.getElementById('cube')
angleArray = [
    [0, 0, 0],
    [-310, -362, -38],
    [-400, -320, -2],
    [135, -217, -88],
    [-224, -317, 5],
    [-47, -219, -81],
    [-133, -360, -53]
];

cube.addEventListener('click', (e) => {
    const randomAngle = Math.floor(Math.random() * 6) + 1
   const resultatTirage=(randomAngle)=>{

       switch(randomAngle){
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
   console.log(resultatTirage)

    /*ANIMATION */
    cube.style.animation = 'animate 4s linear';
    //console.log(randomAngle);
    cube.style.transform = 'rotateX(' + angleArray[randomAngle][0] + 'deg) rotateY(' + angleArray[randomAngle][1] + 'deg) rotateZ(' + angleArray[randomAngle][2] + 'deg)';
    cube.style.transition = '1s linear'

    cube.addEventListener('animationend', function (e) {
        cube.style.animation = '';
    });
})