var divSirops = document.getElementById('siropsContenu');
var divSofts = document.getElementById('softsContenu');
var divBieresBouteille = document.getElementById('bieresBouteille');
var divBieresPression = document.getElementById('bierePression');
var divVins = document.getElementById('vinsContenu');
var divClassiques = document.getElementById('classiquesContenu');
var divExtravagants = document.getElementById('extravagantsContenu');

const boissonASupprimer = document.getElementById('boissonASupprimer');

db.collection("boissons").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var boissonsType = doc.id;
        db.collection("boissons").doc(boissonsType).collection(boissonsType).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var boisson = doc.data();
                 var option = document.createElement('option');

                // Afficher la liste des boissons en fonction de leur type
                switch (boissonsType) {
                    case "Sirops":
                        var siropDiv = document.createElement('div');
                        siropDiv.textContent = boisson['Nom'];
                        siropDiv.classList.add('drink-item');
                        divSirops.appendChild(siropDiv);
                        
                        option.value = boisson['Nom'];
                        option.textContent = boisson['Nom'];
                        boissonASupprimer.appendChild(option);
                        break;
                    case "Softs":
                        var softDiv = document.createElement('div');
                        softDiv.textContent = boisson['Nom'];
                        softDiv.classList.add('drink-item');
                        divSofts.appendChild(softDiv);
                        
                        option.value = boisson['Nom'];
                        option.textContent = boisson['Nom'];
                        boissonASupprimer.appendChild(option);
                        break;
                    case "Vins":
                        var vinDiv = document.createElement('div');
                        vinDiv.textContent = boisson['Nom'];
                        vinDiv.classList.add('drink-item');
                        divVins.appendChild(vinDiv);
                        
                        option.value = boisson['Nom'];
                        option.textContent = boisson['Nom'];
                        boissonASupprimer.appendChild(option);
                        break;
                    case "Classiques":
                        var classiqueDiv = document.createElement('div');
                        classiqueDiv.textContent = boisson['Nom'];
                        classiqueDiv.classList.add('drink-item');
                        divClassiques.appendChild(classiqueDiv);
                        
                        option.value = boisson['Nom'];
                        option.textContent = boisson['Nom'];
                        boissonASupprimer.appendChild(option);
                        break;
                    case "Extravagants":
                        var extravagantDiv = document.createElement('div');
                        extravagantDiv.textContent = boisson['Nom'];
                        extravagantDiv.classList.add('drink-item');
                        divExtravagants.appendChild(extravagantDiv);
                        
                        option.value = boisson['Nom'];
                        option.textContent = boisson['Nom'];
                        boissonASupprimer.appendChild(option);
                        break;
                    default:
                        break;
                }
            });
        }).catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    });
}).catch((error) => {
    console.error('Erreur lors de la récupération des données:', error);
});

// Récupérer toutes les données des bières bouteilles
db.collection("boissons").doc("Bières").collection("Bouteilles").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const option = document.createElement('option');
        var data = doc.data();

        // Afficher la liste des boissons en bouteilles
        var BieresBouteillediv = document.createElement('div');
        BieresBouteillediv.textContent = data['Nom'];
        BieresBouteillediv.classList.add('drink-item');
        divBieresBouteille.appendChild(BieresBouteillediv);
        option.value = data['Nom'];
        option.textContent = data['Nom'];
        boissonASupprimer.appendChild(option);
    });
}).catch((error) => {
    console.error('Erreur lors de la récupération des données:', error);
});

// Récupérer toutes les données des bières pressions
db.collection("boissons").doc("Bières").collection("Pressions").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const option = document.createElement('option');
        var data = doc.data();

        // Afficher la liste des boissons en pression
        var BieresPressiondiv = document.createElement('div');
        BieresPressiondiv.textContent = data['Nom'];
        BieresPressiondiv.classList.add('drink-item');
        divBieresPression.appendChild(BieresPressiondiv);
        option.value = data['Nom'];
        option.textContent = data['Nom'];
        boissonASupprimer.appendChild(option);
    });
}).catch((error) => {
    console.error('Erreur lors de la récupération des données:', error);
});
