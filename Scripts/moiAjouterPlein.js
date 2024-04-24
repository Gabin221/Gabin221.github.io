// Gestionnaire d'événement pour soumettre le formulaire
document.getElementById('addPleinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs du formulaire
    var distance = parseFloat(document.getElementById('distance').value);
    var volume = parseFloat(document.getElementById('volume').value);

    // Obtenir le nombre total de documents dans la collection "Pleins"
    db.collection('Voitures')
        .doc('206plus')
        .collection('Pleins')
        .get()
        .then(function(querySnapshot) {
            // Nombre total de documents
            var numberOfDocuments = querySnapshot.size;

            // Créer un nouveau document avec un nom unique basé sur le nombre total de documents
            db.collection('Voitures')
                .doc('206plus')
                .collection('Pleins')
                .doc('Plein' + (numberOfDocuments + 1)) // Nouveau nom de document
                .set({
                    distance: distance,
                    volume: volume
                })
                .then(function() {
                    console.log("Nouveau plein ajouté avec succès !");
                    // Réinitialiser le formulaire après l'ajout du plein
                    document.getElementById('addPleinForm').reset();
                })
                .catch(function(error) {
                    console.error("Erreur lors de l'ajout du plein :", error);
                    alert("Erreur lors de l'ajout du plein. Veuillez réessayer.");
                });
        })
        .catch(function(error) {
            console.error("Erreur lors de la récupération du nombre de documents :", error);
            alert("Erreur lors de l'ajout du plein. Veuillez réessayer.");
        });
});
