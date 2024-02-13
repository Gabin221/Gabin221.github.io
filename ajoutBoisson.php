<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $url = "http://localhost:5000/boisson/ajouter";

        $data = http_build_query(array(
            'type' => $_POST['type'],
            'texte' => $_POST['texte'],
        ));

        $options = array(
            CURLOPT_URL => $url,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $data,
        );

        $curl = curl_init();
        curl_setopt_array($curl, $options);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($curl);

        if ($response === false) {
            echo 'Erreur cURL : ' . curl_error($curl);
        } else {
            $responseData = json_decode($response, true);
            if (isset($responseData['message'])) {
                echo $responseData['message'];
            }
        }

        curl_close($curl);

        // Redirection vers la page précédente après 0.5 seconde
        header("Refresh: 1; url=".$_SERVER['HTTP_REFERER']);
    }
?>
