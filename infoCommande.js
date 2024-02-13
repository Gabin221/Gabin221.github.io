// Événement de clic pour afficher/masquer la bulle
document.getElementById('boutonInfo1').addEventListener('click', function() {
    var tooltip = document.getElementById('divInfo1');
    tooltip.style.display = (tooltip.style.display === 'none') ? 'block' : 'none';
});