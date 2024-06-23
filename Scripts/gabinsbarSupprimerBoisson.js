// Sélection du formulaire
const updateCarteForm = document.getElementById('deleteCarteForm');

// Ajout d'un gestionnaire d'événement pour l'événement de soumission du formulaire
updateCarteForm.addEventListener('submit', (e) => {
    // Empêcher le rechargement de la page
    e.preventDefault();

    // Récupérer la valeur sélectionnée dans le select
    const boissonASupprimerValue = boissonASupprimer.value;

    // Si aucune boisson n'est sélectionnée, ne rien faire
    if (!boissonASupprimerValue) {
        alert("Veuillez sélectionner une boisson à supprimer.");
        return;
    }

    // Supprimer la boisson sélectionnée dans toutes les collections de boissons
    db.collection("boissons").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const boissonsType = doc.id;

            // Si la collection est "Bières", supprimer dans les sous-collections "Pressions" et "Bouteilles"
            if (boissonsType === "Bières") {
                db.collection("boissons").doc("Bières").collection("Pressions").where("Nom", "==", boissonASupprimerValue).get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            doc.ref.delete().then(() => {
                                console.log("Boisson supprimée avec succès !");
                                // Rafraîchir la page pour refléter les changements
                                location.reload();
                            }).catch((error) => {
                                console.error("Erreur lors de la suppression de la boisson :", error);
                            });
                        });
                    })
                    .catch((error) => {
                        console.error("Erreur lors de la récupération des données :", error);
                    });

                db.collection("boissons").doc("Bières").collection("Bouteilles").where("Nom", "==", boissonASupprimerValue).get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            doc.ref.delete().then(() => {
                                console.log("Boisson supprimée avec succès !");
                                // Rafraîchir la page pour refléter les changements
                                location.reload();
                            }).catch((error) => {
                                console.error("Erreur lors de la suppression de la boisson :", error);
                            });
                        });
                    })
                    .catch((error) => {
                        console.error("Erreur lors de la récupération des données :", error);
                    });

                return; // Sortir de la boucle forEach
            }

            // Supprimer la boisson sélectionnée dans la collection correspondante
            db.collection("boissons").doc(boissonsType).collection(boissonsType).where("Nom", "==", boissonASupprimerValue).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        doc.ref.delete().then(() => {
                            console.log("Boisson supprimée avec succès !");
                            // Rafraîchir la page pour refléter les changements
                            location.reload();
                        }).catch((error) => {
                            console.error("Erreur lors de la suppression de la boisson :", error);
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
