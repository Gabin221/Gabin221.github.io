const boutonAjoutBoisson = document.getElementById('boutonAjoutBoisson');
const boutonSuppressionBoisson = document.getElementById('boutonSuppressionBoisson');
const divAjoutBoisson = document.getElementById('divAjoutBoisson');
const divSuppressionBoisson = document.getElementById('divSuppressionBoisson');
boutonAjoutBoisson.addEventListener('click', function() {
if (divAjoutBoisson.style.display === 'none') {
    divAjoutBoisson.style.display = 'block';
    divSuppressionBoisson.style.display = 'none';
} else {
    divAjoutBoisson.style.display = 'none';
    divSuppressionBoisson.style.display = 'none';
}
});
boutonSuppressionBoisson.addEventListener('click', function() {
if (divSuppressionBoisson.style.display === 'none') {
    divAjoutBoisson.style.display = 'none';
    divSuppressionBoisson.style.display = 'block';
} else {
    divAjoutBoisson.style.display = 'none';
    divSuppressionBoisson.style.display = 'none';
}
});