// Fonction pour récupérer les noms des documents dans la collection "Voitures"
function fetchCarNames() {
    var voitureSelect = document.getElementById("voitureSelect");

    db.collection("Voitures").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var option = document.createElement("option");
            // Remplacer le caractère "+" par "plus"
            option.text = doc.id;
            voitureSelect.add(option);
        });
    }).catch(function(error) {
        console.error("Erreur lors de la récupération des noms de voiture :", error);
    });
}

// Fonction pour récupérer les données des pleins et dessiner le graphique correspondant à la voiture sélectionnée
function fetchAndDrawChart() {
    var selectedCar = document.getElementById("voitureSelect").value;

    var consommations = [];

    var pleinCollectionRef = db.collection("Voitures").doc(selectedCar).collection("Pleins");

    pleinCollectionRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var plein = doc.data();
            var consommation = (plein.volume * 100) / plein.distance;
            consommations.push(consommation);
        });

        // Calculer la moyenne des consommations
        var moyenne = calculateMean(consommations);

        // Dessiner le graphique avec la moyenne des consommations
        drawChart(consommations, moyenne);
    }).catch(function(error) {
        console.error("Erreur lors de la récupération des données des pleins :", error);
    });
}

// Fonction pour calculer la moyenne d'un tableau de valeurs
function calculateMean(values) {
    var sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
}

// Variable globale pour stocker l'instance du graphique
var myChart = null;

// Fonction pour dessiner le graphique avec Chart.js
function drawChart(consommations, moyenne) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: consommations.length }, (_, i) => i + 1), // Itérations
            datasets: [{
                label: 'Consommation par plein',
                data: consommations,
                backgroundColor: '#FF0000',
                borderColor: '#FF0000',
                borderWidth: 1
            }, {
                type: 'line',
                label: 'Moyenne (' + Math.round(moyenne*1000)/1000 + ' L/100)',
                data: Array(consommations.length).fill(moyenne), // Répéter la moyenne pour chaque itération
                borderColor: '#000000',
                backgroundColor: '#000000',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// Appeler la fonction pour récupérer les noms des voitures au chargement de la page
window.onload = function() {
    fetchCarNames();
};
