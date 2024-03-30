var divSirops = document.getElementById('siropsContenu');
var divSofts = document.getElementById('softsContenu');
var divBieresBouteille = document.getElementById('bieresBouteille');
var divBieresPression = document.getElementById('bierePression');
var divVins = document.getElementById('vinsContenu');
var divClassiques = document.getElementById('classiquesContenu');
var divExtravagants = document.getElementById('extravagantsContenu');

// Récupérer toutes les données de la collection "boissons" sauf les bières
db.collection("boissons").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.id contient l'identifiant du document (par exemple, "biere", "sirop")
        // doc.data() contient les données du document
        var data = doc.data();
        var boissonsType = doc.id;

        // Afficher la liste des boissons en fonction de leur type
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const boisson = data[key];
                if (boissonsType === "Sirops") {
                    divSirops.innerHTML += boisson + "<br>";
                } else if (boissonsType === "Softs") {
                    divSofts.innerHTML += boisson + "<br>";
                } else if (boissonsType === "Vins") {
                    divVins.innerHTML += boisson + "<br>";
                } else if (boissonsType === "Classiques") {
                    divClassiques.innerHTML += boisson + "<br>";
                } else if (boissonsType === "Extravagants") {
                    divExtravagants.innerHTML += boisson + "<br>";
                }
            }
        }
    });
}).catch((error) => {
    console.error('Erreur lors de la récupération des données:', error);
});

// Récupérer toutes les données des bières bouteilles
db.collection("boissons").doc("Bières").collection("Bouteilles").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.id contient l'identifiant du document (par exemple, "biere", "sirop")
        // doc.data() contient les données du document
        var data = doc.data();
        var boissonsType = doc.id;

        // Afficher la liste des boissons en fonction de leur type
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const boisson = data[key];
                if (boissonsType === "Bouteilles") {
                    divBieresBouteille.innerHTML += boisson + "<br>";
                }
            }
        }
    });
}).catch((error) => {
    console.error('Erreur lors de la récupération des données:', error);
});

// Récupérer toutes les données des bières pressions
db.collection("boissons").doc("Bières").collection("Pressions").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.id contient l'identifiant du document (par exemple, "biere", "sirop")
        // doc.data() contient les données du document
        var data = doc.data();
        var boissonsType = doc.id;

        // Afficher la liste des boissons en fonction de leur type
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const boisson = data[key];
                if (boissonsType === "Pressions") {
                    divBieresPression.innerHTML += boisson + "<br>";
                }
            }
        }
    });
}).catch((error) => {
    console.error('Erreur lors de la récupération des données:', error);
});