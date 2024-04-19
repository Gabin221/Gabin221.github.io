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
                const option = document.createElement('option');

                // Afficher la liste des boissons en fonction de leur type
                switch (boissonsType) {
                    case "Sirops":
                        divSirops.innerHTML += boisson['Nom'] + "<br>";
                        option.value = boisson['Nom'];
                        option.textContent = boisson['Nom'];
                        boissonASupprimer.appendChild(option);
                        break;
                    case "Softs":
                        divSofts.innerHTML += boisson['Nom'] + "<br>";
                        option.value = boisson['Nom'];
                        option.textContent = boisson['Nom'];
                        boissonASupprimer.appendChild(option);
                        break;
                    case "Vins":
                        divVins.innerHTML += boisson['Nom'] + "<br>";
                        option.value = boisson['Nom'];
                        option.textContent = boisson['Nom'];
                        boissonASupprimer.appendChild(option);
                        break;
                    case "Classiques":
                        divClassiques.innerHTML += boisson['Nom'] + "<br>";
                        option.value = boisson['Nom'];
                        option.textContent = boisson['Nom'];
                        boissonASupprimer.appendChild(option);
                        break;
                    case "Extravagants":
                        divExtravagants.innerHTML += boisson['Nom'] + "<br>";
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
        divBieresBouteille.innerHTML += data['Nom'] + "<br>";
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

        // Afficher la liste des boissons en pressions
        divBieresPression.innerHTML += data['Nom'] + "<br>";
        option.value = data['Nom'];
        option.textContent = data['Nom'];
        boissonASupprimer.appendChild(option);
    });
}).catch((error) => {
    console.error('Erreur lors de la récupération des données:', error);
});
