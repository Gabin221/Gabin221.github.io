// Récupération des langages de programmation depuis Firestore
db.collection('boissons').get().then(querySnapshot => {
    const langageSelect = document.getElementById('categorie');

    querySnapshot.forEach(doc => {
        // Pour chaque document dans la collection "Codes", créez une option dans la liste déroulante
        const option = document.createElement('option');
        option.value = doc.id; // Utilisez l'ID du document comme valeur de l'option
        option.textContent = doc.id; // Utilisez le nom du document comme texte de l'option
        langageSelect.appendChild(option);
    });
}).catch(error => {
    console.error("Erreur lors de la récupération des langages de programmation :", error);
});