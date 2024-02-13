<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Gabin's bar</title>
        <link rel="icon" href="../images/logoSite.png" type="image/png">
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Inter';">
        <div style="display: flex; flex-direction: column;">
            <div style="display: flex; margin-top: 60px; height: 100%;">
                <div id="divContenu" style="top: 60px; border-top: 2px solid black;">
                    <div style="margin-left: 1%; margin-right: 1%; display: flex; flex-direction: column; align-items: center;">
                        <h1 style="font-family: Brush Script MT, Brush Script Std, cursive; font-size: 35px;">Gabin's bar</h1>

                        <div id="divListeCommande" style="display: none; width: 100%; position: fixed; top: 60px; right: 0; padding-left: 10px; padding-right: 10px; border: 2px solid black; background-color: white; z-index: 2;">
                            <h4 style="text-align: center;">Votre panier</h4>

                            <div style="width: 100%;">
                                <ul id="commande-list" style="list-style-type: none;"</ul>
                            </div>
                        </div>

                        <div style="width: 100%; position: relative;">
                            <div id="boutonInfo1" style="width: 10%; margin-right: 5%; margin-bottom: 2%; cursor: pointer; position: relative; z-index: 1; float: right;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M11 7V9H13V7H11M14 17V15H13V11H10V13H11V15H10V17H14M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z" style="fill: #037A68;" />
                                </svg>
                            </div>
                            <div id="divInfo1" style="background-color: #037A68; color: white; border-radius: 5px; padding: 1%; width: 80%; display: none; position: absolute; z-index: 1;">
                                Je suis limité à 500 notifications par mois, après le service sera indisponible. Normalement ça ira largement mais si on pouvait éviter les tests de commande inutiles ce serait cool 😉.
                            </div>
                        </div>

                        <form method="post" action="passerCommande.php">

                            <div style="width: 100%; margin-bottom: 20px; display: flex; justify-content: space-around; align-items: center;">
                                <div style="border: 2px solid black; border-radius: 20px; width: 50%; padding-left: 1%; text-align: center;">
                                    <br>
                                    <?php
                                        // URL de votre API Python
                                        $url = 'http://localhost:5000/gabgabEtCleouch/biere';

                                        // Effectuer la requête GET
                                        $response = file_get_contents($url);

                                        // Vérifier si la requête a réussi
                                        if ($response !== false) {
                                            // Décoder la réponse JSON en tableau associatif
                                            $data = json_decode($response, true);

                                            // Vérifier si la réponse contient des données
                                            if (!empty($data)) {
                                                // Parcourir les données et les afficher
                                                $compteur = 0;
                                                foreach ($data as $recette) {
                                                    $id_recette = $recette['id'];
                                                    $contenu = $recette['label'];

                                                    if ($compteur % 2 == 0) {
                                                        echo "<label style='display: flex; justify-content: flex-start;'><input type='checkbox' name='commandeBoisson[]' value='$contenu'>$contenu</label>";
                                                    } else {
                                                        echo "<label style='display: flex; justify-content: flex-end;'>$contenu<input type='checkbox' name='commandeBoisson[]' value='$contenu'></label>";
                                                    }

                                                    $compteur += 1;
                                                }
                                            } else {
                                                echo "Aucune recette trouvée.";
                                            }
                                        } else {
                                            echo "Erreur lors de la requête vers l'API.";
                                        }
                                    ?>
                                    <br>
                                </div>

                                <img src="../images/biereBar.png" style="width: 45%; height: 30%;">
                            </div>

                            <div style="width: 100%; margin-bottom: 20px; display: flex; justify-content: space-around; align-items: center;">
                                <img src="../images/siropBar.png" style="width: 45%; height: 30%;">

                                <div style="border: 2px solid black; border-radius: 20px; width: 50%; float: right;">
                                    <br>
                                    <?php
                                        // URL de votre API Python
                                        $url = 'http://localhost:5000/gabgabEtCleouch/sirop';

                                        // Effectuer la requête GET
                                        $response = file_get_contents($url);

                                        // Vérifier si la requête a réussi
                                        if ($response !== false) {
                                            // Décoder la réponse JSON en tableau associatif
                                            $data = json_decode($response, true);

                                            // Vérifier si la réponse contient des données
                                            if (!empty($data)) {
                                                // Parcourir les données et les afficher
                                                $compteur = 0;
                                                foreach ($data as $recette) {
                                                    $id_recette = $recette['id'];
                                                    $contenu = $recette['label'];

                                                    if ($compteur % 2 == 0) {
                                                        echo "<label style='display: flex; justify-content: flex-start;'><input type='checkbox' name='commandeBoisson[]' value='$contenu'>$contenu</label>";
                                                    } else {
                                                        echo "<label style='display: flex; justify-content: flex-end;'>$contenu<input type='checkbox' name='commandeBoisson[]' value='$contenu'></label>";
                                                    }
                                                    
                                                    $compteur += 1;
                                                }
                                            } else {
                                                echo "Aucune recette trouvée.";
                                            }
                                        } else {
                                            echo "Erreur lors de la requête vers l'API.";
                                        }
                                    ?>
                                    <br>
                                </div>
                            </div>

                            <div style="width: 100%; margin-bottom: 20px; display: flex; justify-content: space-around; align-items: center;">
                                <div style="border: 2px solid black; border-radius: 20px; width: 50%;">
                                    <br>
                                    <?php
                                        // URL de votre API Python
                                        $url = 'http://localhost:5000/gabgabEtCleouch/soft';

                                        // Effectuer la requête GET
                                        $response = file_get_contents($url);

                                        // Vérifier si la requête a réussi
                                        if ($response !== false) {
                                            // Décoder la réponse JSON en tableau associatif
                                            $data = json_decode($response, true);

                                            // Vérifier si la réponse contient des données
                                            if (!empty($data)) {
                                                // Parcourir les données et les afficher
                                                $compteur = 0;
                                                foreach ($data as $recette) {
                                                    $id_recette = $recette['id'];
                                                    $contenu = $recette['label'];

                                                    if ($compteur % 2 == 0) {
                                                        echo "<label style='display: flex; justify-content: flex-start;'><input type='checkbox' name='commandeBoisson[]' value='$contenu'>$contenu</label>";
                                                    } else {
                                                        echo "<label style='display: flex; justify-content: flex-end;'>$contenu<input type='checkbox' name='commandeBoisson[]' value='$contenu'></label>";
                                                    }

                                                    $compteur += 1;
                                                }
                                            } else {
                                                echo "Aucune recette trouvée.";
                                            }
                                        } else {
                                            echo "Erreur lors de la requête vers l'API.";
                                        }
                                    ?>
                                    <br>
                                </div>

                                <img src="../images/softBar.png" style="width: 45%; height: 30%;">
                            </div>

                            <div style="width: 100%; display: flex; flex-direction: column;">
                                <div style="width: 100%; display: flex; justify-content: space-around; align-items: center;">
                                    <img src="../images/cafeBar.png" style="width: 25%; height: 30%;">

                                    <div style="border: 2px solid black; border-radius: 20px; width: 50%; float: right;">
                                        <br>
                                        <?php
                                            // URL de votre API Python
                                            $url = 'http://localhost:5000/gabgabEtCleouch/cafe';

                                            // Effectuer la requête GET
                                            $response = file_get_contents($url);

                                            // Vérifier si la requête a réussi
                                            if ($response !== false) {
                                                // Décoder la réponse JSON en tableau associatif
                                                $data = json_decode($response, true);

                                                // Vérifier si la réponse contient des données
                                                if (!empty($data)) {
                                                    // Parcourir les données et les afficher
                                                    $compteur = 0;
                                                    foreach ($data as $recette) {
                                                        $id_recette = $recette['id'];
                                                        $contenu = $recette['label'];

                                                        if ($compteur % 2 == 0) {
                                                            echo "<label style='display: flex; justify-content: flex-start;'><input type='checkbox' name='commandeBoisson[]' value='$contenu'>$contenu</label>";
                                                        } else {
                                                            echo "<label style='display: flex; justify-content: flex-end;'>$contenu<input type='checkbox' name='commandeBoisson[]' value='$contenu'></label>";
                                                        }

                                                        $compteur += 1;
                                                    }
                                                } else {
                                                    echo "Aucune recette trouvée.";
                                                }
                                            } else {
                                                echo "Erreur lors de la requête vers l'API.";
                                            }
                                        ?>
                                        <br>
                                    </div>
                                </div>

                                <div style="width: 100%; position: relative;">
                                    <div id="boutonInfo" style="width: 10%; margin-right: 5%; margin-bottom: 2%; cursor: pointer; position: relative; z-index: 1; float: right;">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M11 7V9H13V7H11M14 17V15H13V11H10V13H11V15H10V17H14M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z" style="fill: #037A68;" />
                                        </svg>
                                    </div>
                                    <div id="divInfo" style="background-color: #037A68; color: white; border-radius: 5px; padding: 1%; width: 80%; display: none; position: absolute; z-index: 1;">
                                    Mis à part le <i>café en poudre</i> et le <i>thé en sachet</i>, tout provient de la <i>Dolce Gusto</i>.
                                    </div>
                                </div>
                            </div>

                            <div style="width: 100%; margin-bottom: 20px; display: flex; justify-content: space-around; align-items: center;">
                                <div style="border: 2px solid black; border-radius: 20px; width: 50%;">
                                    <br>
                                    <?php
                                        // URL de votre API Python
                                        $url = 'http://localhost:5000/gabgabEtCleouch/classique';

                                        // Effectuer la requête GET
                                        $response = file_get_contents($url);

                                        // Vérifier si la requête a réussi
                                        if ($response !== false) {
                                            // Décoder la réponse JSON en tableau associatif
                                            $data = json_decode($response, true);

                                            // Vérifier si la réponse contient des données
                                            if (!empty($data)) {
                                                // Parcourir les données et les afficher
                                                $compteur = 0;
                                                foreach ($data as $recette) {
                                                    $id_recette = $recette['id'];
                                                    $contenu = $recette['label'];

                                                    if ($compteur % 2 == 0) {
                                                        echo "<label style='display: flex; justify-content: flex-start;'><input type='checkbox' name='commandeBoisson[]' value='$contenu'>$contenu</label>";
                                                    } else {
                                                        echo "<label style='display: flex; justify-content: flex-end;'>$contenu<input type='checkbox' name='commandeBoisson[]' value='$contenu'></label>";
                                                    }

                                                    $compteur += 1;
                                                }
                                            } else {
                                                echo "Aucune recette trouvée.";
                                            }
                                        } else {
                                            echo "Erreur lors de la requête vers l'API.";
                                        }
                                    ?>
                                    <br>
                                </div>

                                <img src="../images/classiqueBar.png" style="width: 35%; height: 30%;">
                            </div>

                            <div style="width: 100%; margin-bottom: 20px; display: flex; justify-content: space-around; align-items: center;">
                                <img src="../images/extravagantBar.png" style="width: 45%; height: 30%;">

                                <div style="border: 2px solid black; border-radius: 20px; width: 50%; float: right;">
                                    <br>
                                    <?php
                                        // URL de votre API Python
                                        $url = 'http://localhost:5000/gabgabEtCleouch/extravagant';

                                        // Effectuer la requête GET
                                        $response = file_get_contents($url);

                                        // Vérifier si la requête a réussi
                                        if ($response !== false) {
                                            // Décoder la réponse JSON en tableau associatif
                                            $data = json_decode($response, true);

                                            // Vérifier si la réponse contient des données
                                            if (!empty($data)) {
                                                // Parcourir les données et les afficher
                                                $compteur = 0;
                                                foreach ($data as $recette) {
                                                    $id_recette = $recette['id'];
                                                    $contenu = $recette['label'];

                                                    if ($compteur % 2 == 0) {
                                                        echo "<label style='display: flex; justify-content: flex-start;'><input type='checkbox' name='commandeBoisson[]' value='$contenu'>$contenu</label>";
                                                    } else {
                                                        echo "<label style='display: flex; justify-content: flex-end;'>$contenu<input type='checkbox' name='commandeBoisson[]' value='$contenu'></label>";
                                                    }

                                                    $compteur += 1;
                                                }
                                            } else {
                                                echo "Aucune recette trouvée.";
                                            }
                                        } else {
                                            echo "Erreur lors de la requête vers l'API.";
                                        }
                                    ?>
                                    <br>
                                </div>
                            </div>

                            <div style="width: 100%; margin-bottom: 20px; display: flex; justify-content: space-around; align-items: center;">
                                <div style="border: 2px solid black; border-radius: 20px; width: 50%;">
                                    <br>
                                    <?php
                                        // URL de votre API Python
                                        $url = 'http://localhost:5000/gabgabEtCleouch/sodastream';

                                        // Effectuer la requête GET
                                        $response = file_get_contents($url);

                                        // Vérifier si la requête a réussi
                                        if ($response !== false) {
                                            // Décoder la réponse JSON en tableau associatif
                                            $data = json_decode($response, true);

                                            // Vérifier si la réponse contient des données
                                            if (!empty($data)) {
                                                // Parcourir les données et les afficher
                                                $compteur = 0;
                                                foreach ($data as $recette) {
                                                    $id_recette = $recette['id'];
                                                    $contenu = $recette['label'];

                                                    if ($compteur % 2 == 0) {
                                                        echo "<label style='display: flex; justify-content: flex-start;'><input type='checkbox' name='commandeBoisson[]' value='$contenu'>$contenu</label>";
                                                    } else {
                                                        echo "<label style='display: flex; justify-content: flex-end;'>$contenu<input type='checkbox' name='commandeBoisson[]' value='$contenu'></label>";
                                                    }

                                                    $compteur += 1;
                                                }
                                            } else {
                                                echo "Aucune recette trouvée.";
                                            }
                                        } else {
                                            echo "Erreur lors de la requête vers l'API.";
                                        }
                                    ?>
                                    <br>
                                </div>

                                <img src="../images/sodastreamBar.png" style="width: 45%; height: 30%;">
                            </div>

                            <button id="commandButton" onclick="commander()" type="submit" style="position: fixed; top: 40%; right: 5px; padding: 0; border: 0; background: none;">
                                <div id="buttonText" style="cursor: pointer; display: flex; flex-direction: column; border: 2px solid black; padding: 5px; background-color: #B0F849; writing-mode: vertical-rl; text-orientation: upright;">
                                    COMMANDER
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <script src="../scripts/infoCommande.js"></script>

        <script src="../scripts/changementTexteBoutonCommande.js"></script>

        <script src="../scripts/boutonPanier.js"></script>

        <script src="../scripts/creationPanier.js"></script>
    </body>
</html>
