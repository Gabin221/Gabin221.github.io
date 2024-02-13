<?php
    if(isset($_POST['commandButton'])) {
        // Assurez-vous que la session est démarrée
        session_start();

        // Vérifiez si l'utilisateur est connecté et que le pseudo est stocké en session
        if(isset($_SESSION['username'])) {
            // Récupérez le pseudo de l'utilisateur
            $pseudo = $_SESSION['username'];

            // Vérifiez d'abord si des cases à cocher ont été sélectionnées
            if(isset($_POST['commandeBoisson'])) {
                // Créez une liste pour stocker les éléments sélectionnés
                $listeSelections = [];

                // Parcourez les valeurs des cases à cocher sélectionnées
                foreach($_POST['commandeBoisson'] as $selectedBlock) {
                    // Ajoutez chaque bloc sélectionné à la liste
                    $listeSelections[] = $selectedBlock;
                }

                // Construisez les données à envoyer
                $data = [
                    'pseudo' => $pseudo,
                    'selections' => $listeSelections
                ];

                // Convertissez les données en JSON
                $jsonData = json_encode($data);

                // URL du point de terminaison
                $endpoint = "http://localhost:5000/notifications";

                // Configuration de la requête
                $options = [
                    'http' => [
                        'method' => 'POST',
                        'header' => 'Content-Type: application/json',
                        'content' => $jsonData
                    ]
                ];

                // Créez le contexte de la requête
                $context = stream_context_create($options);

                // Effectuez la requête POST vers le point de terminaison
                $result = file_get_contents($endpoint, false, $context);

                // Vérifiez si la requête a réussi
                if($result !== false) {
                    // Traitement réussi
                    echo "Les sélections ont été envoyées avec succès.";
                } else {
                    // Erreur lors de l'envoi des sélections
                    echo "Une erreur s'est produite lors de l'envoi des sélections.";
                }
            } else {
                // Aucune case à cocher sélectionnée
                echo "Aucune sélection effectuée.";
            }
        } else {
            // Utilisateur non connecté
            echo "Utilisateur non connecté.";
        }

        // Redirection vers la page précédente après 0.5 seconde
        header("Refresh: 0; url=".$_SERVER['HTTP_REFERER']);
    }
    
    elseif(isset($_POST['deleteButton'])) {
        // Récupération des labels des boissons à supprimer
        $labels = $_POST['commandeBoisson'];
    
        // Tableau pour stocker les messages de suppression
        $messages = array();
    
        foreach ($labels as $label) {
            // Contactez l'endpoint de recherche pour obtenir l'ID
            $data = array('label' => $label);
            $options = array(
                'http' => array(
                    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                    'method' => 'POST',
                    'content' => http_build_query($data),
                ),
            );
            $context = stream_context_create($options);
            $result = file_get_contents('http://localhost:5000/boisson/chercher', false, $context);
    
            if ($result === false) {
                $messages[] = "Erreur lors de la recherche de la boisson : $label";
            } else {
                // Analyse de la réponse JSON pour obtenir l'ID
                $response = json_decode($result, true);
                if (isset($response['boisson_id'])) {
                    $boisson_id = $response['boisson_id'];
    
                    // Contactez l'endpoint de suppression avec l'ID
                    $data = array('suppressionBoisson' => $boisson_id);
                    $options = array(
                        'http' => array(
                            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                            'method' => 'POST',
                            'content' => http_build_query($data),
                        ),
                    );
                    $context = stream_context_create($options);
                    $result = file_get_contents('http://localhost:5000/boisson/supprimer', false, $context);
    
                    if ($result === false) {
                        $messages[] = "Erreur lors de la suppression de la boisson : $label";
                    } else {
                        $messages[] = "La boisson $label a été supprimée avec succès.";
                    }
                } else {
                    $messages[] = "Aucune boisson trouvée avec le label : $label";
                }
            }
        }
    
        // Affichez les messages de suppression
        foreach ($messages as $message) {
            echo $message . "<br>";
        }
    
        // Redirection vers la page précédente après 1 seconde
        header("Refresh: 1; url=".$_SERVER['HTTP_REFERER']);
    }
?>