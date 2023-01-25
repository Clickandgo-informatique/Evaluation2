export const contenu_modal_bienvenue = `  
<p>Ce petit jeu de dé à deux joueur a été réalisé par l'élève Emmanuel Leveque dans le cadre de l'évaluation en cours de formation n° 2 de STUDI pour le parcours :</p>
<p><strong>Dévelopeur web et mobile Full-Stack</strong></p>
<p>Le dévelopement de ce jeu est constant et cette version correspond donc a une beta fonctionnelle en cours d'évolution.</p>
<br>
<h4><strong>Règles du jeu :</strong></h4>
<p>A chaque début de partie l'IA sélectionne automatiquement et par aléatoire l'un des deux joueurs pour débuter une partie.
<br>- Deux joueurs doivent lancer le dé pour essayer de cumuler un maximum de points en décidant à quel moment ajouter le stock de points provisoires ("score courant") au stock de points "total" et tenter au plus vite d'obtenir le score final de 100 points.
<br>- Le joueur actif peut lancer autant de fois qu'il le désire tant qu'il ne tire pas un "1" ou qu'il n'ajoute pas son score courant à son score total ce qui provoque automatiquement un passage de tour et changement de joueur actif...
(L'IA se charge de permuter entre joueurs)</p>`

export const titre_modal_bienvenue = "Jeu de dé à deux joueurs"
export const titre_modal_fin_partie = "Fin de partie"
export const titre_modal_confirmation = "Demande de confirmation"
export const contenu_modal_confirmation = "Une partie est en cours, êtes vous sûr de vouloir quitter cette partie ?"
export const footer_modal_confirmation =
    `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button> 
<button type="button" id="btnNewGameFromModal" class="btn btn-secondary" data-bs-dismiss="modal">Oui, je suis d'accord</button>
`
export const modal_afficher_vainqueur = (numjoueur) => {
    return `<h1>Le joueur ${numjoueur} a gagné la partie !<h1>`
}