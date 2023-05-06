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
    <!-- Import police Lato : -->
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap" rel="stylesheet" />

    <!-- Feuille de style personnalisée -->
    <link rel="stylesheet" href="css/styles.css" />

    <title>Evaluation 2 - Jeu de dé</title>
</head>

<body>
    <!-- Surface Bureau -->
    <div class="container-fluid bureau animationBureau">
        <div class="row p-1 d-flex justify-content-center">
      
            <!-- Tapis de jeu -->
            <div class="container">
                <div class="row">
                    <div class="col-md-8 tapis-jeu mx-auto mt-1">
                        <!-- Container scores -->
                        <?php include("./includes/container-scores.php") ?>      

                        <!-- Cube-3d représentant le dé -->
                        <?php include("./includes/cube3d.php") ?>

                        <!-- Barre informative -->
                        <div class="container-fluid barreInfo">
                            <div class="row p-1 text-center text-white text-Shadow my-1">
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
        <?php include("./includes/container-boutons.php") ?>

        <!-- Copyrights -->
        <div class="container">
            <div class="row">
                <div class="signature">
                    <span class="text-Shadow text-center">Code by Emmanuel Leveque for STUDI &nbsp;&nbsp;&copy;&nbsp;Copyrights 2023
                </div>
            </div>
        </div>
    </div><!-- Fin container bureau -->

    <!-- Modale -->
    <?php include("./includes/modal.php") ?>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>

<script type="module" src="./js/main.js" defer></script>

</html>