const sirops = document.getElementById('sirops');
const boutonSirops = document.getElementById('boutonSirops');
const softs = document.getElementById('softs');
const boutonSofts = document.getElementById('boutonSofts');
const bieres = document.getElementById('bieres');
const boutonBieres = document.getElementById('boutonBieres');
const vins = document.getElementById('vins');
const boutonVins = document.getElementById('boutonVins');
const classiques = document.getElementById('classiques');
const boutonClassiques = document.getElementById('boutonClassiques');
const extravagants = document.getElementById('extravagants');
const boutonExtravagants = document.getElementById('boutonExtravagants');

boutonSirops.addEventListener('click', function() {
    if (sirops.style.display === 'none') {
        sirops.style.display = 'block';
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    } else {
        sirops.style.display = 'none';
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    }
});

boutonSofts.addEventListener('click', function() {
    if (softs.style.display === 'none') {
        sirops.style.display = "none";
        softs.style.display = 'block';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    } else {
        sirops.style.display = 'none';
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    }
});

boutonBieres.addEventListener('click', function() {
    if (bieres.style.display === 'none') {
        sirops.style.display = "none";
        softs.style.display = 'none';
        bieres.style.display = 'block';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    } else {
        sirops.style.display = 'none';
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    }
});

boutonVins.addEventListener('click', function() {
    if (vins.style.display === 'none') {
        sirops.style.display = "none";
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'block';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    } else {
        sirops.style.display = 'none';
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    }
});

boutonClassiques.addEventListener('click', function() {
    if (classiques.style.display === 'none') {
        sirops.style.display = "none";
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'block';
        extravagants.style.display = 'none';
    } else {
        sirops.style.display = 'none';
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    }
});

boutonExtravagants.addEventListener('click', function() {
    if (extravagants.style.display === 'none') {
        sirops.style.display = "none";
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'block';
    } else {
        sirops.style.display = 'none';
        softs.style.display = 'none';
        bieres.style.display = 'none';
        vins.style.display = 'none';
        classiques.style.display = 'none';
        extravagants.style.display = 'none';
    }
});
