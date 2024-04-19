// Ouverture de la fenêtre modale lorsque le bouton est cliqué
document.getElementById('modifierCarteButton').addEventListener('click', function() {
    document.getElementById('myModalModifierCarte').style.display = 'block';
});

// Fermeture de la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
document.getElementsByClassName('close')[1].addEventListener('click', function() {
    document.getElementById('myModalModifierCarte').style.display = 'none';
});