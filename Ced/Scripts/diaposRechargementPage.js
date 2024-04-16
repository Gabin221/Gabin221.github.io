// Fonction pour recharger la page toutes les X minutes
function reloadPageEveryXMinutes(minutes) {
    // Convertir les minutes en millisecondes
    const milliseconds = minutes * 60 * 1000;

    // Planifier le rechargement de la page après X minutes
    setTimeout(function() {
        location.reload(); // Recharger la page
    }, milliseconds);
}

// Appel de la fonction pour recharger la page toutes les X minutes (par exemple, toutes les 30 minutes)
reloadPageEveryXMinutes(30);
