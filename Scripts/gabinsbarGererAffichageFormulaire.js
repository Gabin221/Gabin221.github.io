document.addEventListener('DOMContentLoaded', function () {
    var encryptedUserLoggedIn = sessionStorage.getItem('userLoggedIn');
    var encryptedUserRights = sessionStorage.getItem('userRights');
    if (encryptedUserLoggedIn && encryptedUserRights) {
        if (encryptedUserLoggedIn === 'true' && encryptedUserRights === 'boss') {
            document.getElementById('formulairesGabinsbar').style.display = 'block';
        } else {
            document.getElementById('formulairesGabinsbar').style.display = 'none';
        }
    } else {
        document.getElementById('formulairesGabinsbar').style.display = 'none';
    }
});
