// Soumission du formulaire
document.getElementById('programForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Récupération des valeurs du formulaire
    const nomProgramme = document.getElementById('nomProgramme').value;
    const description = document.getElementById('description').value;
    const codeProgramme = document.getElementById('codeProgramme').value;
    const langage = document.getElementById('langage').value;

    // Envoi des données à Firebase
    db.collection('Codes').doc(langage).collection(langage).add({
        Nom: nomProgramme,
        Description: description,
        Code: codeProgramme
    }).then(function() {
        console.log("Données envoyées avec succès !");
        // Effacer le formulaire après l'envoi
        document.getElementById('programForm').reset();
        location.reload();
    }).catch(function(error) {
        console.error("Erreur d'envoi des données:", error);
    });
});