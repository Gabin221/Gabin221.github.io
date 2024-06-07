// Soumission du formulaire
document.getElementById('musicSuggestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Récupération des valeurs du formulaire
    const titre = document.getElementById('titleMusic').value;
    const artistes = document.getElementById('artistesMusic').value;
    const remarque = document.getElementById('remarqueMusic').value;

    // Envoi des données à Firebase
    db.collection('Musiques').add({
        Titre: titre,
        Artistes: artistes,
        Remarque: remarque
    }).then(function() {
        console.log("Données envoyées avec succès !");
        const successMessage = document.createElement('p');
        successMessage.style.color = 'green';
        successMessage.innerText = `Suggestion de musique envoyée avec succès.`;
        statusUpload.appendChild(successMessage);
        // Effacer le formulaire après l'envoi
        document.getElementById('musicSuggestForm').reset();
    }).catch(function(error) {
        console.error("Erreur d'envoi des données:", error);
        const errorMessage = document.createElement('p');
        errorMessage.style.color = 'red';
        errorMessage.innerText = `Erreur de l'envoie de la musique: ${error.message}`;
        statusUpload.appendChild(errorMessage);
    });
    

    
});