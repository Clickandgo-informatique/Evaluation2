<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap" rel="stylesheet" />

    <!-- Feuille de style personnalisée -->
    <link rel="stylesheet" href="css/styles.css" />

    <title>Evaluation 2 - Jeu de dès</title>
</head>

<body>
    <!-- Surface Bureau -->
    <div class="container-fluid bureau animationBureau">
        <div class="row p-2 d-flex justify-content-center">
            <!-- Container scores -->
            <div class="container container-scores">
                <div class="row">
                    <div class="col-xxl-12 d-flex justify-content-center p-2">
                        <!-- Scores Joueur 1 -->
                        <div class="container container-scores-joueur1 p-1" id="joueur1">
                            <div class="row">
                                <div class="col mb-1">
                                    <span class="titre-joueur1 text-Shadow text-center text-white p-2">Joueur 1</span>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col box-Shadow score-courant cont-score-courantJ1 mx-1 py-1">
                                        <h6 class="text-Shadow text-white text-center">Courant</h6>
                                        <h4 class="score-courant text-Shadow text-white text-center score-courant-joueur1">
                                            0</h4>
                                    </div>
                                    <div class="col box-Shadow score-total mx-1 py-1">
                                        <h6 class="text-Shadow text-white text-center">Total</h6>
                                        <h4 class="text-Shadow score-total score-total-joueur1 text-white text-center my-0">
                                            0</h4>
                                    </div>
                                </div>
                            </div>
                        </div><!-- Fin scores Joueur 1 -->
                        <!-- Container timer -->
     

                        <!-- Scores Joueur 2 -->
                        <div class="container container-scores-joueur2 p-1" id="joueur2">
                            <div class="row">
                                <div class="col mb-1">
                                    <span class="titre-joueur2 text-Shadow text-center text-white p-2">Joueur
                                        2</span>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col box-Shadow score-courant cont-score-courantJ2 mx-1 py-1">
                                        <h6 class="text-Shadow text-white text-center">Courant</h6>
                                        <h4 class="score-courant text-Shadow text-white text-center score-courant-joueur2">
                                            0
                                        </h4>
                                    </div>
                                    <div class="col  box-Shadow score-total mx-1 py-1">
                                        <h6 class="text-Shadow text-white text-center">Total</h6>
                                        <h4 class="text-Shadow score-total score-total-joueur2 text-white text-center my-0">
                                            0
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div><!-- Fin scores Joueur 2 -->
                    </div>
                </div>
            </div>

            <!-- Tapis de jeu -->
            <div class="container">
                <div class="row">
                    <div class="col-md-8 tapis-jeu mx-auto mt-3">

                        <!-- Container-joueur-actif -->
                        <div class="container container-joueur-actif">
                            <div class="row">
                                <div class="col-md-10 mx-auto">
                                    <div class="joueurActif text-Shadow text-center">
                                        <p class="text">Aucun joueur actif</p>
                                    </div>
                                </div>
                            </div>
                        </div><!-- Fin container-joueur-actif -->

                        <!-- Cube-3d représentant le dé -->
                        <div class="container-cube-3d">

                            <div class="col-md-12">
                                <div class="cube" id="cube">
                                    <div class="front">
                                        <span class="fas fa-circle"></span>
                                    </div>

                                    <div class="back">
                                        <pre class="firstPre"><span class="fas fa-circle"></span>    <span class="fas fa-circle"></span>     <span class="fas fa-circle"></span></pre>
                                        <br />
                                        <pre class="secondPre"><span class="fas fa-circle"></span>    <span class="fas fa-circle"></span>    <span class="fas fa-circle"></span></pre>
                                    </div>

                                    <div class="top">
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                    </div>

                                    <div class="left">
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                    </div>

                                    <div class="right">
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                    </div>

                                    <div class="bottom">
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                        <span class="fas fa-circle"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Barre informative -->
                        <div class="container-fluid barreInfo">
                            <div class="row p-1 text-center text-white text-Shadow my-5">
                                <div class="col-md-12">
                                    <div id="barreInfo"></div>
                                </div>
                            </div>
                        </div><!-- Fin barre informative -->
                    </div>
                </div>
            </div>
        </div><!-- Fin tapis de jeu -->

        <!-- Container boutons -->
        <div class="container container-boutons">
            <div class="row p-2">
                <div class="col-xxl-12 d-flex justify-content-center p-2">

                    <button type="button" class="btn btn-primary mx-1 box-Shadow left-icon-holder text-white text-bold m-1" id="btn-hold">
                        <i class="fa fa-calculator text-white"></i>
                        &nbsp;Ajouter au score global
                    </button>
                    <button type="button" class="btn btn-warning mx-1 box-Shadow left-icon-holder text-white m-1" id="btn-roll">
                        <i class="fa fa-dice text-white"></i>
                        &nbsp;Lancer le dé
                    </button>
                    <button type="button" class="btn btn-success mx-1 box-Shadow left-icon-holder text-white m-1" id="btn-new-game">
                        <i class="fa fa-play"></i>
                        &nbsp;Nouvelle partie
                    </button>
                    <button type="button" class="btn btn-danger mx-1 box-Shadow left-icon-holder text-white m-1" id="btn-dismiss-game">
                        <i class="fa fa-circle-xmark"></i>
                        &nbsp;Abandon
                    </button>
                </div>
            </div>
        </div><!-- Fin container boutons -->
    </div>
    <div class="signature">
        <span class="text-Shadow">Code by Emmanuel Leveque for STUDI &nbsp;&nbsp;&copy;&nbsp;Copyrights 2023
    </div>

    <!-- Modal -->
    <div class="modal fade modal-lg" id="myModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="titre_modal" id="titre-modal"></h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="lead"></p>
                    <div class="contenu-modal p-5" id="contenu-modal"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>

<script type="module" defer src="./js/main.js"></script>

</html>