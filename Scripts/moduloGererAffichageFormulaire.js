function decryptData(data, key) {
    var bytes = CryptoJS.AES.decrypt(data, key);
    return bytes.toString(CryptoJS.enc.Utf8);
}

document.addEventListener('DOMContentLoaded', function () {
    var encryptionKey = 'secretKey'; // La même clé utilisée pour chiffrer

    var encryptedUserLoggedIn = sessionStorage.getItem('userLoggedIn');
    var encryptedUserRights = sessionStorage.getItem('userRights');

    if (encryptedUserLoggedIn && encryptedUserRights) {
        var userLoggedIn = decryptData(encryptedUserLoggedIn, encryptionKey);
        var userRights = decryptData(encryptedUserRights, encryptionKey);

        if (userLoggedIn === 'true' && userRights === 'boss') {
            document.getElementById('ajoutSuppressionCode').style.display = 'block';
        } else {
            document.getElementById('ajoutSuppressionCode').style.display = 'none';
        }
    } else {
        document.getElementById('ajoutSuppressionCode').style.display = 'none';
    }
});