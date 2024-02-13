<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Vérification si un code a été sélectionné
        if (empty($_POST['deleteButton'])) {
            echo "Veuillez sélectionner un code à supprimer.";
            exit;
        }

        // Récupération de l'id du code à supprimer
        $codeId = $_POST['deleteButton'];

        // Création des données pour la requête POST
        $data = array('suppressionBoisson' => $codeId);

        // Configuration de la requête POST
        $options = array(
            'http' => array(
                'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                'method' => 'POST',
                'content' => http_build_query($data),
            ),
        );

        // Envoi de la requête POST à l'endpoint
        $context = stream_context_create($options);
        $result = file_get_contents('http://localhost:5000/boisson/supprimer', false, $context);

        // Vérification de la réponse de l'endpoint
        if ($result === false) {
            echo "Erreur lors de la suppression de la boisson.";
            exit;
        } else {
            echo "La boisson a été supprimé.";
        }

        // Redirection vers la page précédente après 0.5 seconde
        header("Refresh: 1; url=".$_SERVER['HTTP_REFERER']);
    }
?>