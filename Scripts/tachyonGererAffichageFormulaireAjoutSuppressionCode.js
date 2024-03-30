// Fonction pour cacher toutes les divs sauf celle spécifiée
function hideAllDivsExcept(divIdToShow) {
    var divs = document.querySelectorAll('div[id$="Code"]'); // Sélectionne toutes les divs dont l'ID se termine par "Code"
    divs.forEach(function(div) {
        if (div.id !== divIdToShow) {
            div.style.display = "none";
        }
    });
}

// Fonction pour afficher ou cacher une div en fonction de son état actuel
function toggleDivVisibility(divId) {
    var div = document.getElementById(divId);
    if (div.style.display === "none") {
        hideAllDivsExcept(divId);
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

// Ajouter un gestionnaire d'événements de clic pour chaque bouton
document.getElementById("ajouterBtn").addEventListener("click", function() {
    toggleDivVisibility("ajoutCode");
});

document.getElementById("supprimerBtn").addEventListener("click", function() {
    toggleDivVisibility("supprimerCode");
});