<?php
    session_start();
    if(isset($_GET['deconnexion'])){ 
        if($_GET['deconnexion']==true) { 
            session_unset();
            header("Location: ../cleouchEtGabgab");
            exit;
        }
    }
    if (isset($_GET['returnUrl'])) {
        $_SESSION['returnUrl'] = $_GET['returnUrl'];
    }
?>
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
            <div style="background-color: #037A68; color: white; height: 60px; position: fixed; top: 0; left: 0; right: 0; border-bottom: 2px solid black; display: flex; justify-content: space-between; align-items: center;">
                <?php include('../header.php'); ?>
            </div>

            <div id="divCompte" style="display: none; position: fixed; top: 60px; right: 0; padding-left: 10px; padding-right: 10px; border: 2px solid black; background-color: white; z-index: 2;">
                <h4 style="text-align: center;">Compte</h4>

                <p>
                    pseudo : <?php echo $_SESSION['username'] ?>
                </p>
                <br>
                <br>
                <br>
                <a href="../connexion/index.php?returnUrl=<?php echo urlencode($_SERVER['REQUEST_URI']); ?>" style="text-decoration: none; color: inherit;">
                    connexion
                </a>
                <br>
                <br>
                <a href='../cleouchEtGabgab?deconnexion=true' style="text-decoration: none; color: inherit;">
                    déconnexion
                </a>
                <br>
                <br>
            </div>

            <div style="display: flex; margin-top: 60px; height: 100%;">
                <div id="divMenu" style="background-color: #037A68; color: white; width: 22%; min-height: 100%; position: fixed; top: 62px; border-right: 2px solid black; display: flex; flex-direction: column;">
                    <?php include('../contenuMenu.php'); ?>
                </div>
                <div id="divContenu" style="top: 60px; border-top: 2px solid black;">
                    <div style="margin-left: 1%; margin-right: 1%; display: flex; flex-direction: column; align-items: center;">
                        <h1 style="font-family: Brush Script MT, Brush Script Std, cursive; font-size: 35px;">Gabin's bar</h1>

                        <?php
                            if (isset($_SESSION['permissions']) && $_SESSION['permissions'] === 'administrateurs' || isset($_SESSION['permissions']) && $_SESSION['permissions'] === 'eleves') {
                        ?>

                        <div id="divListeCommande" style="display: none; width: 100%; position: fixed; top: 60px; right: 0; padding-left: 10px; padding-right: 10px; border: 2px solid black; background-color: white; z-index: 2;">
                            <h4 style="text-align: center;">Votre panier</h4>

                            <div style="width: 100%;">
                                <ul id="commande-list" style="list-style-type: none;"</ul>
                            </div>
                        </div>

                        <button name="boutonAjoutBoisson" type="submit" style="position: fixed; top: 20%; right: 5px; padding: 0; border: 0; background: none;">
                            <div id="boutonAjoutBoisson" style="cursor: pointer; display: flex; flex-direction: column; border: 2px solid black; padding: 5px; background-color: #6699FF; writing-mode: vertical-rl; text-orientation: upright;">
                                AJOUTER
                            </div>
                        </button>

                        <div id="divAjoutBoisson" style="display: none; width: 100%;">
                            <div style="width: 100%; margin-bottom: 20px; display: flex; justify-content: space-around; align-items: center;">
                                <div style="border: 2px solid black; border-radius: 20px; width: 100%; padding-left: 1%; text-align: center;">
                                    <h3>Ajouter une boisson</h3>
                                    <form action="ajoutBoisson.php" method="POST">
                                        <label for="type">Type de boisson :</label><br>
                                        <select name="type" id="type">
                                            <option value="" disabled selected>--- Veuillez choisir un type de boisson ---</option>
                                            <option value="biere">Bière</option>
                                            <option value="soft">Soft</option>
                                            <option value="sirop">Sirop</option>
                                            <option value="cafe">Café</option>
                                            <option value="classique">Classique</option>
                                            <option value="extravagant">Extravagante</option>
                                            <option value="sodastream">Sodastream</option>
                                        </select>
                                        <br><br>
                                        <label for="texte">Intitulé :</label><br>
                                        <input type="text" name="texte" id="texte">
                                        <br><br>
                                        <input type="submit" value="Ajouter"><br><br>
                                    </form>
                                </div>
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

                        <form method="post" action="traitement.php" id="commande-form">

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

                            <button name="commandButton" onclick="commander()" type="submit" style="position: fixed; top: 40%; right: 5px; padding: 0; border: 0; background: none;">
                                <div id="buttonText" style="cursor: pointer; display: flex; flex-direction: column; border: 2px solid black; padding: 5px; background-color: #B0F849; writing-mode: vertical-rl; text-orientation: upright;">
                                    COMMANDER
                                </div>
                            </button>

                            <button name="deleteButton" type="submit" style="position: fixed; top: 65%; right: 5px; padding: 0; border: 0; background: none;">
                                <div id="buttonDelete" style="cursor: pointer; display: flex; flex-direction: column; border: 2px solid black; padding: 5px; background-color: #FF6666; writing-mode: vertical-rl; text-orientation: upright;">
                                    SUPPRIMER
                                </div>
                            </button>

                        </form>

                        <?php
                            } elseif (isset($_SESSION['permissions']) && $_SESSION['permissions'] === 'restreints') {
                        ?>

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

                        <?php
                            } else {
                        ?>

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

                                                if ($compteur%2 == 0){
                                                    echo '<div style="text-align: left; margin-left: 1%;">' . $contenu . '</div>';
                                                } else {
                                                    echo '<div style="text-align: right; margin-right: 1%;">' . $contenu . '</div>';
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

                                                if ($compteur%2 == 0){
                                                    echo '<div style="text-align: left; margin-left: 1%;">' . $contenu . '</div>';
                                                } else {
                                                    echo '<div style="text-align: right; margin-right: 1%;">' . $contenu . '</div>';
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

                                                if ($compteur%2 == 0){
                                                    echo '<div style="text-align: left; margin-left: 1%;">' . $contenu . '</div>';
                                                } else {
                                                    echo '<div style="text-align: right; margin-right: 1%;">' . $contenu . '</div>';
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

                                                    if ($compteur%2 == 0){
                                                        echo '<div style="text-align: left; margin-left: 1%;">' . $contenu . '</div>';
                                                    } else {
                                                        echo '<div style="text-align: right; margin-right: 1%;">' . $contenu . '</div>';
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

                                                if ($compteur%2 == 0){
                                                    echo '<div style="text-align: left; margin-left: 1%;">' . $contenu . '</div>';
                                                } else {
                                                    echo '<div style="text-align: right; margin-right: 1%;">' . $contenu . '</div>';
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

                                                if ($compteur%2 == 0){
                                                    echo '<div style="text-align: left; margin-left: 1%;">' . $contenu . '</div>';
                                                } else {
                                                    echo '<div style="text-align: right; margin-right: 1%;">' . $contenu . '</div>';
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

                                                if ($compteur%2 == 0){
                                                    echo '<div style="text-align: left; margin-left: 1%;">' . $contenu . '</div>';
                                                } else {
                                                    echo '<div style="text-align: right; margin-right: 1%;">' . $contenu . '</div>';
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

                        <?php
                            }
                        ?>
                    </div>
                    <div id="footer" style="border-top: 2px solid black; display: flex; justify-content: space-around; padding-top: 10px; margin-bottom: 0; background-color: #037A68;">
                        <?php include('../footer.php'); ?>
                    </div>
                </div>
            </div>
        </div>
        
        <?php
            if (isset($_SESSION['permissions'])) {
                $permissions = $_SESSION['permissions'];
            
                // Effectuer un echo conditionnel en fonction des droits
                if ($permissions === 'administrateurs' || $permissions === 'eleves') {
        ?>

        <script src="../scripts/boutonsBoissons.js"></script>

        <script src="../scripts/infoCommande.js"></script>

        <script src="../scripts/changementTexteBoutonCommande.js"></script>

        <script src="../scripts/boutonPanier.js"></script>

        <script src="../scripts/creationPanier.js"></script>

        <?php
                } elseif ($permissions === 'restreints') {
        ?>

        <script src="../scripts/infoCommande.js"></script>

        <script src="../scripts/changementTexteBoutonCommande.js"></script>

        <script src="../scripts/boutonPanier.js"></script>

        <script src="../scripts/creationPanier.js"></script>

        <?php
                }
            }
        ?>

        <script src="../scripts/boutonDeMenu.js"></script>

        <script src="../scripts/verifLargeurEcran.js"></script>

        <script src="../scripts/infoCafe.js"></script>
    </body>
</html>
