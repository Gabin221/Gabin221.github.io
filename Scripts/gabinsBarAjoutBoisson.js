document.getElementById('updateCarteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Récupération des valeurs du formulaire
    const nomBoisson = document.getElementById('nomBoisson').value;
    const categorie = document.getElementById('categorie').value;
    const pressionBouteille = document.getElementById('pressionBouteille').value;
    const quantiteBoisson = document.getElementById('quantiteBoisson').value;
    const quantiteAlcool = document.getElementById('quantiteAlcool').value;

    if (categorie === "Bières") {
        // Envoi des données à Firebase
        db.collection('boissons').doc(categorie).collection(pressionBouteille).add({
            Nom: nomBoisson,
            Quantite: quantiteBoisson,
            Alcool: quantiteAlcool
        }).then(function() {
            console.log("Données envoyées avec succès !");
            // Effacer le formulaire après l'envoi
            document.getElementById('updateCarteForm').reset();
        }).catch(function(error) {
            console.error("Erreur d'envoi des données:", error);
        });
    } else {
        // Envoi des données à Firebase
        db.collection('boissons').doc(categorie).collection(categorie).add({
            Nom: nomBoisson,
            Quantite: quantiteBoisson,
            Alcool: quantiteAlcool
        }).then(function() {
            console.log("Données envoyées avec succès !");
            // Effacer le formulaire après l'envoi
            document.getElementById('updateCarteForm').reset();
        }).catch(function(error) {
            console.error("Erreur d'envoi des données:", error);
        });
    }    
});