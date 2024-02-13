// Événement de clic pour afficher/masquer la bulle
document.getElementById('boutonInfo').addEventListener('click', function() {
    var tooltip = document.getElementById('divInfo');
    tooltip.style.display = (tooltip.style.display === 'none') ? 'block' : 'none';
});