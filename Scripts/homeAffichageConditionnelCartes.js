function checkUserStatus() {
    // Vérifier si l'utilisateur est connecté
    var userLoggedIn = localStorage.getItem('userLoggedIn');
    if (userLoggedIn === "true") {
        // L'utilisateur est connecté, vérifier son niveau de droits
        var userRights = localStorage.getItem('userRights');
        if (userRights === "boss") {
            // L'utilisateur a le niveau de droits "boss"
            return true;
        }
    }
    // Si l'utilisateur n'est pas connecté ou n'a pas le niveau de droits "boss", retourner false
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    //var carteCed = document.querySelector('.carte h3');
    if (!checkUserStatus()) {
        // Si l'utilisateur n'est pas connecté ou n'a pas le niveau de droits "boss", masquez la carte
        document.getElementById('cartePourCed').style.display = "none";
        document.getElementById('cartePourMoi').style.display = "none";
    }
});
