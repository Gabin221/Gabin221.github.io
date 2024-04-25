// Fonction de déconnexion
function logout() {
    // Supprimer les informations de connexion du stockage local
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRights');
    // Redirection vers la page précédente ou la page par défaut
    var previousPage = localStorage.getItem('previousPage');
    if (previousPage) {
        window.location.href = previousPage;
    } else {
        window.location.href = 'index.html'; // Page par défaut
    }
}

// Fonction pour encoder le mot de passe avec SHA-256 en utilisant Forge
function encryptPassword(password) {
    var md = forge.md.sha256.create();
    md.update(password);
    return md.digest().toHex();
}

// Vérification des informations de connexion
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    var pseudo = document.getElementById('pseudo').value;
    var motDePasse = document.getElementById('motDePasse').value;

    // Chiffrer le mot de passe saisi par l'utilisateur
    var hashedPassword = encryptPassword(motDePasse);

    // Vérification des informations de connexion avec Firestore
    var usersRef = db.collection('user_gabinsbar');
    usersRef.where('id', '==', pseudo).where('motdepasse', '==', hashedPassword).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                // Récupérer les données utilisateur
                querySnapshot.forEach((doc) => {
                    var userData = doc.data();
                    var droits = userData.droits; // Récupérer le niveau de droits de l'utilisateur
                    // Enregistrement de l'état de connexion de l'utilisateur dans le stockage local ou les cookies, par exemple :
                    localStorage.setItem('userLoggedIn', true);
                    localStorage.setItem('currentUser', pseudo);
                    localStorage.setItem('userRights', droits); // Enregistrer le niveau de droits
                    // Redirection vers la page précédente ou la page par défaut
                    var previousPage = localStorage.getItem('previousPage');
                    if (previousPage) {
                        window.location.href = previousPage;
                    } else {
                        window.location.href = 'index.html'; // Page par défaut
                    }
                });
            } else {
                // Informer l'utilisateur que les informations de connexion sont incorrectes
                alert('Les informations de connexion sont incorrectes. Veuillez réessayer.');
            }
        })
        .catch((error) => {
            console.error('Erreur lors de la vérification des informations de connexion:', error);
        });
});

// Appeler logout() lorsque la page est quittée ou fermée
window.addEventListener('beforeunload', function(event) {
    logout();
});

// Appeler logout() lorsque la page est fermée
window.addEventListener('unload', function(event) {
    logout();
});