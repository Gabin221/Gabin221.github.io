function lancementVsOrdinateur() { // Partie avec l'ordinateur
    document.querySelector('.regle').classList.add('disparition');
    document.querySelector('.pendu').classList.remove('disparition');
    let lePendu = new Pendu("lePendu",dico,"Ordinateur");
    let nameJoueur2= document.querySelector(".pendu section:nth-of-type(1) article:nth-of-type(2) p:nth-of-type(1)");
    nameJoueur2.innerText=(`Score ${lePendu.Joueur2} :`);
    document.querySelector('.pendu section:nth-of-type(1) article:nth-of-type(3)').addEventListener('click', function(e){
        let initElem = e.target;
        if (initElem.attributes.name.value==="stop"){
            lePendu.creeResultat();
        }
        if(initElem.attributes.name.value==="next"){
            lePendu.tourSuivant();
        }
    });
    document.querySelector("main section.pendu section:nth-of-type(5)").addEventListener('click',lePendu.rafraichir);
    for (let counter =0; counter< lePendu.tableauBouton.length;counter++){
        lePendu.tableauBouton[counter].addEventListener('click',( res => {
            let lettre = res.path[0].getAttribute("data-alphabet");
            lePendu.lettrePropose=lettre;
            res.path[0].disabled = true;
            lePendu.alphabetclick();
        }));
    };
} // Partie avec l'ordinateur

function lancementVsJoueur(){ // Partie avec l'ordinateur
    document.querySelector('.regle').classList.add('disparition');
    document.querySelector('.pendu').classList.remove('disparition');
    let lePendu = new Pendu("lePendu",dico,"Joueur 2");
    let nameJoueur2= document.querySelector(".pendu section:nth-of-type(1) article:nth-of-type(2) p:nth-of-type(1)");
    nameJoueur2.innerText=(`Score ${lePendu.Joueur2} :`);
    document.querySelector('.pendu section:nth-of-type(1) article:nth-of-type(3)').addEventListener('click', function(e){
        let initElem = e.target;
        if (initElem.attributes.name.value==="stop"){
            lePendu.creeResultat();
        }
        if(initElem.attributes.name.value==="next"){
            lePendu.tourSuivant();
        }
    })
    document.querySelector("main section.pendu section:nth-of-type(5)").addEventListener('click',lePendu.rafraichir);
    for (let counter =0; counter< lePendu.tableauBouton.length;counter++){
        lePendu.tableauBouton[counter].addEventListener('click',( res => {
            let lettre = res.path[0].getAttribute("data-alphabet");
            lePendu.lettrePropose=lettre;
            res.path[0].disabled = true;
            lePendu.alphabetclick();
        }));
    }
} // Partie avec l'ordinateur

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".ordinateur").addEventListener('click',lancementVsOrdinateur);
    document.querySelector(".joueur").addEventListener('click',lancementVsJoueur);
});