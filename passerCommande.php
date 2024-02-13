<?php
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
?>
