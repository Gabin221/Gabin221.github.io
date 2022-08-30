function affiche(texte, endroit){
  let myVariable1 = document.querySelector(endroit);
  myVariable1.textContent = "" + texte;
}


function calculer(){
    let salaire = Number(document.getElementById("salaire").value);
    let caf = Number(document.getElementById("caf").value);
    let bonus = Number(document.getElementById("bonus").value);
    let loyer = Number(document.getElementById("loyer").value);
    let assurance = Number(document.getElementById("assurance").value);
    let internet = Number(document.getElementById("internet").value);
    let electricite = Number(document.getElementById("electricite").value);
    let forfait = Number(document.getElementById("forfait").value);
    let fraisBancaires = Number(document.getElementById("fraisBancaires").value);
    let mutuelle = Number(document.getElementById("mutuelle").value);
    let fraisParticulier = Number(document.getElementById("fraisParticulier").value);
    let carburant = Number(document.getElementById("carburant").value);
    let courses = Number(document.getElementById("courses").value);
    let capitalEff = Number(document.getElementById("capitalEff").value);

    let revenusTotaux = salaire + caf + bonus;
    let depensesOblig = loyer + assurance + internet + electricite + forfait + fraisBancaires + mutuelle;
    let depensesFacul = fraisParticulier + carburant + courses;
    let depensesTotales = depensesOblig + depensesFacul;
    let ratio = revenusTotaux*100/depensesTotales;
    let capitalPrev = Math.round((capitalEff + revenusTotaux - depensesTotales)*100)/100;

    affiche(revenusTotaux, 'pRevenus');
    affiche(depensesOblig, 'pDepOblig');
    affiche(depensesFacul, 'pDepFacul');
    affiche(depensesTotales, 'pDepTot');
    affiche(ratio, 'pPourcentage');
    affiche(capitalPrev, 'pCapitalPrev');
}

var menuButtonDevineNombre = document.querySelector('#DevineNombre');
menuButton.addEventListener('click',);