const presentation = document.getElementById('divPresentation');
const boutonPresentation = document.getElementById('boutonPresentation');
const c = document.getElementById('divC');
const boutonC = document.getElementById('boutonC');
const cpp = document.getElementById('divCpp');
const boutonCpp = document.getElementById('boutonCpp');
const kotlin = document.getElementById('divKotlin');
const boutonKotlin = document.getElementById('boutonKotlin');
const latex = document.getElementById('divLatex');
const boutonLatex = document.getElementById('boutonLatex');
const lignesDeCommandes = document.getElementById('divLignesDeCommandes');
const boutonLignesDeCommandes = document.getElementById('boutonLignesDeCommandes');
const python = document.getElementById('divPython');
const boutonPython = document.getElementById('boutonPython');
const shell = document.getElementById('divShell');
const boutonShell = document.getElementById('boutonShell');
const web = document.getElementById('divWeb');
const boutonWeb = document.getElementById('boutonWeb');

boutonC.addEventListener('click', function() {
    if (c.style.display === 'none') {
        c.style.display = 'block';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    } else {
        c.style.display = 'none';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    }
});

boutonCpp.addEventListener('click', function() {
    if (cpp.style.display === 'none') {
        c.style.display = "none";
        cpp.style.display = 'block';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    } else {
        c.style.display = 'none';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    }
});

boutonKotlin.addEventListener('click', function() {
    if (kotlin.style.display === 'none') {
        c.style.display = "none";
        cpp.style.display = 'none';
        kotlin.style.display = 'block';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    } else {
        c.style.display = 'none';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    }
});

boutonLatex.addEventListener('click', function() {
    if (latex.style.display === 'none') {
        c.style.display = "none";
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'block';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    } else {
        c.style.display = 'none';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    }
});

boutonLignesDeCommandes.addEventListener('click', function() {
    if (lignesDeCommandes.style.display === 'none') {
        c.style.display = "none";
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'block';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    } else {
        c.style.display = 'none';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    }
});

boutonPython.addEventListener('click', function() {
    if (python.style.display === 'none') {
        c.style.display = "none";
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'block';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    } else {
        c.style.display = 'none';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    }
});

boutonShell.addEventListener('click', function() {
    if (shell.style.display === 'none') {
        c.style.display = "none";
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'block';
        web.style.display = 'none';
        presentation.style.display = 'none';
    } else {
        c.style.display = 'none';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    }
});

boutonWeb.addEventListener('click', function() {
    if (web.style.display === 'none') {
        c.style.display = "none";
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'block';
        presentation.style.display = 'none';
    } else {
        c.style.display = 'none';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    }
});

boutonPresentation.addEventListener('click', function() {
    if (presentation.style.display === 'none') {
        c.style.display = "none";
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'block';
    } else {
        c.style.display = 'none';
        cpp.style.display = 'none';
        kotlin.style.display = 'none';
        latex.style.display = 'none';
        lignesDeCommandes.style.display = 'none';
        python.style.display = 'none';
        shell.style.display = 'none';
        web.style.display = 'none';
        presentation.style.display = 'none';
    }
});
