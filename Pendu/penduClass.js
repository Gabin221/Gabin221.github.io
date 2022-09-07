class Pendu{ //classe du pendu

    constructor(id,dico,Joueur2){ //init de la classe Pendu
        this.creeCanvas();
        this.tableauLettre=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        this.nombreAlphabet=26;
        this.Joueur2=Joueur2;
        this.tourDeJeu=0;
        this.scoreJoueur1=0;
        this.scoreJoueur2=0;
        this.tableauBouton = document.querySelectorAll('main section.pendu section:nth-of-type(4) button');
        this.tentative = 0;
        this.nombreMotDico= 22740;
        this.dico = dico;
        this.choixMot();
        this.afficherTaille();
        this.quiJoue(this.Joueur2);
        this.pression();
    } //init de la classe Pendu

    creeCanvas(){
        const section=document.querySelector("main section.pendu section:nth-of-type(2)");
        const canvas = document.createElement("canvas");
        canvas.setAttribute("width","300");
        canvas.setAttribute("height","410");
        section.appendChild(canvas);
        this.context = canvas.getContext("2d");
    }

    draw(tentative){//Permet de dessiner le pendu
        switch(tentative){
            case 0:
                this.context.moveTo(0,400);
                this.context.lineTo(200,400);
                this.context.stroke();
                break;
            case 1:
                this.context.moveTo(100,0);
                this.context.lineTo(100,400);
                this.context.stroke();
                break;
            case 2:
                this.context.moveTo(100,0);
                this.context.lineTo(200,0);
                this.context.stroke();
                break;
            case 3:
                this.context.moveTo(200,0);
                this.context.lineTo(200,60);
                this.context.stroke();
                break;
            case 4:
                this.context.beginPath();
                this.context.arc(200,90,30,0,2*Math.PI);
                this.context.stroke();
                break;
            case 5:
                this.context.moveTo(200,120);
                this.context.lineTo(200,250);
                this.context.stroke();
                break;
            case 6:
                this.context.moveTo(200,150);
                this.context.lineTo(250,200);
                this.context.stroke();
                break;
            case 7:
                this.context.moveTo(200,150);
                this.context.lineTo(150,200);
                this.context.stroke();
                break;
            case 8:
                this.context.moveTo(200,250);
                this.context.lineTo(250,300);
                this.context.stroke();
                break;
            case 9:
                this.context.moveTo(200,250);
                this.context.lineTo(150,300);
                this.context.stroke();
                break;
        }
    } //Permet de dessiner le pendu

    MotJuste(){ //verifier si le mot et juste
        const motProposeTableau=document.querySelectorAll("main section.pendu section:nth-of-type(3) div");
        let motPropose="";
        motProposeTableau.forEach(function (element) {
            motPropose += element.innerText;
    });
        if(this.mot===motPropose){
            this.nonDispoBouton();
            this.montrePetitMenu("gagné");
            this.attribuScore();
        }
    } //verifier si le mot et juste

    choixMot(){ //choisi le mot dans le dictionnaire
        let chiffre = Math.floor(Math.random() * this.nombreMotDico);
        this.nombreMotDico--;
        this.mot = this.dico[chiffre].toUpperCase();
        dico.splice(chiffre, 1);
        this.motTableau = this.mot.split("");
    } //choisi le mot dans le dictionnaire

    afficherTaille(){ //permet d'afficher sur le html
        this.motTableau.forEach(function (element) { //
            let div = document.createElement('div');
            div.classList.add('lettre');
            if(element==="-" || element===" "){
                div.innerHTML=("-");
                div.style.color = "black";
            }
            else {
                div.innerHTML=("-");
            }
            document.querySelector('main section.pendu section:nth-of-type(3)').append(div);
        });
    } //permet d'afficher sur le html

    supprimerDivMot(){ //permet de mettre a 0 l'affichage mot
        let section = document.querySelector("main section.pendu section:nth-of-type(3)");
        section.innerHTML="";
    } //permet de mettre a 0 l'affichage mot

    supprimerDivInfo(){ //Permet de rinitialiser la div qui informe
        document.querySelector('main section.pendu section:nth-of-type(1) article:nth-of-type(3)').innerHTML="";
    } //Permet de rinitialiser la div qui informe

    dispoBouton(){ //Permet de rentre tout les bouton dispo
    this.tableauBouton.forEach(function (element) {
        element.disabled=false;
    });
} //Permet de rentre tout les bouton dispo

    nonDispoBouton(){ //Permet de rentre tout les bouton non dispo
        this.tableauBouton.forEach(function (element) {
            element.disabled= true;
        });
    } //Permet de rentre tout les bouton non dispo

    montreMot(){ //Permet de montrer le mot
        this.supprimerDivMot();
        this.motTableau.forEach(function (element) { //
            let div = document.createElement('div');
            div.classList.add('lettre');
            if(element==="-"){
                div.innerHTML=("-");
                div.style.color = "black";
            }
            else {
                div.innerHTML=(element);
                div.style.color = "black";
            }
            document.querySelector('main section.pendu section:nth-of-type(3)').append(div);
        });
    } //Permet de montrer le mot

    alphabetclick() { // pour quand on propose des lettres;
        let test = this.motTableau.indexOf(this.lettrePropose);
        let lettre = this.lettrePropose;
        if (test < 0){
            this.draw(this.tentative);
            this.tentative++;
            if(this.tentative===10){
                this.nonDispoBouton();
                this.montreMot();
                this.montrePetitMenu("perdu");
            }
        }
        else{
            this.motTableau.forEach(function (element, index) {
                if(element===lettre){
                    let div =document.querySelector(`main section.pendu section:nth-of-type(3) div:nth-of-type(${index+1})`);
                    div.innerHTML= lettre;
                    div.style.color = "black";
                }
            });
            this.MotJuste();
        }
    } // pour quand on propose des lettres;

    montrePetitMenu(resultat){ // Permet d'afficher le petit menu
        let h1 = document.createElement('h1');
        let section =document.querySelector('main section.pendu section:nth-of-type(1) article:nth-of-type(3)');
        let bouttonStop = document.createElement("button");
        let bouttonNext = document.createElement("button");
        if(this.Joueur2==="Ordinateur"&&(this.tourDeJeu%2)===1) {
            h1.innerHTML = (`l'ordinateur a ${resultat} le mot était ${this.mot}`);
        }
        else {
            h1.innerHTML = (`Vous avez ${resultat} le mot était ${this.mot}`);
        }
        bouttonStop.innerHTML=("Stop");
        bouttonStop.setAttribute("name", "stop");
        bouttonNext.innerHTML=("Tour suivant");
        bouttonNext.setAttribute("name", "next");
        section.appendChild(h1);
        section.appendChild(bouttonStop);
        section.appendChild(bouttonNext);
    } // Permet d'afficher le petit menu

    attribuScore(){ // Attribu les score
        if(this.tourDeJeu%2===0){
            this.scoreJoueur1+=parseInt(this.mot.length);
            let Joueur1 =document.querySelector(".pendu section:nth-of-type(1) article:nth-of-type(1) p:nth-of-type(2)");
            Joueur1.innerHTML=(this.scoreJoueur1);
        }
        else{
            this.scoreJoueur2+=parseInt(this.mot.length);
            let Joueur2 =document.querySelector(".pendu section:nth-of-type(1) article:nth-of-type(2) p:nth-of-type(2)");
            Joueur2.innerHTML=(this.scoreJoueur2);
        }
    } // Attribu les score

    quiJoue(joueur2){ // détermine qui jou
        let titre=document.querySelector("main h1");
        if(this.tourDeJeu%2===0){
            titre.innerText=("Joueur 1 joue");
        }
        else{
            titre.innerText=(`${joueur2} joue`);
        }
    } // détermine qui jou

    supprimerCanvas(){ //supprime le canvas
    document.querySelector("main section.pendu section:nth-of-type(2)").innerHTML=("");
    } //supprime le canvas

    tourSuivant(){ //tour suivant
        this.tourDeJeu++;
        this.tentative=0;
        this.supprimerDivMot();
        this.supprimerDivInfo();
        this.context.clearRect(0, 0, 300, 410);
        this.supprimerCanvas();
        this.creeCanvas();
        this.choixMot();
        this.dispoBouton();
        this.afficherTaille();
        this.quiJoue(this.Joueur2);
        if(this.Joueur2==="Ordinateur" && (this.tourDeJeu%2)===1){
            document.querySelector("main section.pendu section:nth-of-type(4)").classList.add('disparition');
            this.tableauLettre=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            this.nombreAlphabet=26;
            this.leRobot();
        }
        else {
            document.querySelector("main section.pendu section:nth-of-type(4)").classList.remove('disparition');
        }
    } //tour suivant

    creeResultat(){ //Afficher résultat
        let p1 = document.createElement('p');
        let bouttonRetour = document.createElement('button');
        let lesBoutton = document.querySelectorAll('.pendu section:nth-of-type(1) article:nth-of-type(3) button');
        lesBoutton.forEach(function (element) {
            element.disabled=true;
        });

        if(this.scoreJoueur1<this.scoreJoueur2){
            p1.textContent=('Bravo le joueur 2 Gagne');
        }
        if(this.scoreJoueur1===this.scoreJoueur2){
            p1.textContent=("Bravo c'est une égalité");
        }
        else{
            p1.textContent= ('Bravo le joueur 1 Gagne');
        }
        let section = document.querySelector('main section.pendu section:nth-of-type(5)');
        bouttonRetour.innerHTML=("Retour menu");
        section.appendChild(p1);
        section.appendChild(bouttonRetour);
    } //Afficher résultat

    rafraichir(){ // Pour recharger
        location.reload();
    } // Pour recharger

    leRobot(){//pour la parti Ordinateur
        while(this.tentative!==10) {
            let IndexAlphabet = Math.floor(Math.random() * this.nombreAlphabet);
            this.nombreAlphabet--;
            let lettre = this.tableauLettre[IndexAlphabet];
            this.tableauLettre.splice(IndexAlphabet, 1);
            let test = this.motTableau.indexOf(lettre );
            if (test < 0) {
                this.draw(this.tentative);
                this.tentative++;
                const motProposeTableau=document.querySelectorAll("main section.pendu section:nth-of-type(3) div");
                let motPropose="";
                motProposeTableau.forEach(function (element) {
                    motPropose += element.innerText;
                });
                if (this.tentative === 10&&this.mot!==motPropose) {
                    this.nonDispoBouton();
                    this.montreMot();
                    this.montrePetitMenu("perdu");
                }
            } else {
                this.motTableau.forEach(function (element, index) {
                    if (element === lettre) {
                        let div = document.querySelector(`main section.pendu section:nth-of-type(3) div:nth-of-type(${index + 1})`);
                        div.innerHTML = lettre;
                        div.style.color = "black";
                    }
                });
                this.MotJuste();
            }
        }
    } //pour la parti Ordinateur
    pression() {
        document.onkeypress = (evt) => {
            let uneLettre = evt.key.toUpperCase();
            let test = this.motTableau.indexOf(uneLettre);
            this.desactivationBoutton(uneLettre);
            if (test < 0){
                this.draw(this.tentative);
                this.tentative++;
                if(this.tentative===10){
                    this.nonDispoBouton();
                    this.montreMot();
                    this.montrePetitMenu("perdu");
                }
            }
            else{
                this.motTableau.forEach(function (element, index) {
                    if(element===uneLettre){
                        let div =document.querySelector(`main section.pendu section:nth-of-type(3) div:nth-of-type(${index+1})`);
                        div.innerHTML= uneLettre;
                        div.style.color = "black";
                    }
                });
                this.MotJuste();
            }
        };
    }//pour la parti Pression de clavier

    desactivationBoutton(uneLettre){
        this.tableauBouton.forEach(function (element) {
            if(element.getAttribute('data-alphabet')===uneLettre){
                element.disabled=true;
            }
        })
}
}