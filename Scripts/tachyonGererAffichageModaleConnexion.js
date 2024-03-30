// Ouverture de la fenêtre modale lorsque le bouton est cliqué
document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

// Fermeture de la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});