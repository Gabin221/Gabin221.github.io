document.addEventListener('DOMContentLoaded', function () {
    var encryptedUserLoggedIn = sessionStorage.getItem('userLoggedIn');
    var encryptedUserRights = sessionStorage.getItem('userRights');

    if (encryptedUserLoggedIn && encryptedUserRights) {
        if (encryptedUserLoggedIn === 'true' && encryptedUserRights === 'boss') {
            document.getElementById('ajoutSuppressionCode').style.display = 'block';
        } else {
            document.getElementById('ajoutSuppressionCode').style.display = 'none';
        }
    } else {
        document.getElementById('ajoutSuppressionCode').style.display = 'none';
    }
});