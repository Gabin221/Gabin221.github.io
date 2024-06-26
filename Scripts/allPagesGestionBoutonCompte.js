document.addEventListener('DOMContentLoaded', function() {
    function decryptData(data, key) {
        if (data) {
            var bytes = CryptoJS.AES.decrypt(data, key);
            return bytes.toString(CryptoJS.enc.Utf8);
        }
        return null;
    }

    const svgElement = document.getElementById('buttonAccount');
    var encryptionKey = 'secretKey';
    var userLoggedIn = decryptData(sessionStorage.getItem('userLoggedIn'), encryptionKey);
    const connecte = `<svg onCLick="loginout()" id="buttonAccount" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" /></svg>`;
    const nonConnecte = `<svg onCLick="loginout()" id="buttonAccount" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.75,7L4.03,5.75L13.26,15L20,21.72L18.73,23L15.73,20H4V17C4,15.14 6.61,13.92 9.09,13.36L2.75,7M20,17V19.18L18.1,17.28V17C18.1,16.74 17.6,16.35 16.8,16L14,13.18C16.71,13.63 20,14.91 20,17M5.9,17V18.1H13.83L10.72,15C8.19,15.3 5.9,16.45 5.9,17M12,4A4,4 0 0,1 16,8C16,9.95 14.6,11.58 12.75,11.93L8.07,7.25C8.42,5.4 10.05,4 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6Z" /></svg>`;

    function updateSVG() {
        if (userLoggedIn === 'true') {
            svgElement.innerHTML = nonConnecte;
        } else {
            svgElement.innerHTML = connecte;
        }
    }

    updateSVG();
});
