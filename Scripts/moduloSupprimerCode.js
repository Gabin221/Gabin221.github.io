// Sélection du formulaire
const programForm = document.getElementById('programFormSupprimer');

// Ajout d'un gestionnaire d'événement pour l'événement de soumission du formulaire
programForm.addEventListener('submit', (e) => {
    // Empêcher le rechargement de la page
    e.preventDefault();

    // Récupérer la valeur sélectionnée dans le select
    const codeASupprimerValue = codeASupprimer.value;

    // Si aucune boisson n'est sélectionnée, ne rien faire
    if (!codeASupprimerValue) {
        alert("Veuillez sélectionner un code à supprimer.");
        return;
    }

    // Supprimer la boisson sélectionnée dans toutes les collections de boissons
    db.collection("Codes").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const codeType = doc.id;

            // Supprimer la boisson sélectionnée dans la collection correspondante
            db.collection("Codes").doc(codeType).collection(codeType).where("Nom", "==", codeASupprimerValue).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete().then(() => {
                            console.log("Code supprimée avec succès !");
                            // Rafraîchir la page pour refléter les changements
                            location.reload();
                        }).catch((error) => {
                            console.error("Erreur lors de la suppression du code :", error);
                        });
                    });
                })
                .catch((error) => {
                    console.error("Erreur lors de la récupération des données :", error);
                });
        });
    }).catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
    });
});
