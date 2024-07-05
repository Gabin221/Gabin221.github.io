document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour encoder le mot de passe avec SHA-256 en utilisant Forge
    function encryptPassword(password) {
        var md = forge.md.sha256.create();
        md.update(password);
        return md.digest().toHex();
    }

    // Vérification des informations de connexion
    document.getElementById('loginFormConnect').addEventListener('submit', function(event) {
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
                        sessionStorage.setItem('userLoggedIn', true);
                        sessionStorage.setItem('currentUser', pseudo);
                        sessionStorage.setItem('userRights', droits); // Enregistrer le niveau de droits
                        history.back(); // Page par défaut
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
});

