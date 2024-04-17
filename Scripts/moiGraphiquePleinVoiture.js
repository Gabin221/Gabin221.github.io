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

var myChart = null; // Déclarer la variable myChart à l'extérieur de la fonction drawChart

// Fonction pour dessiner le graphique avec Chart.js
function drawChart(consommations, moyenne) {
    var ctx = document.getElementById('myChart').getContext('2d');

    // Détruire le graphique existant s'il y en a un
    if (myChart) {
        myChart.destroy();
    }

    // Calculer la régression linéaire
    var consommationsX = Array.from({ length: consommations.length }, (_, i) => i + 1); // Créer un tableau de valeurs x (itérations)
    var regressionLine = linearRegression(consommationsX, consommations); // Calculer la régression linéaire
    var trendlineData = consommationsX.map(x => regressionLine.slope * x + regressionLine.intercept); // Calculer les valeurs de la courbe de tendance

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: consommations.length }, (_, i) => i + 1), // Itérations
            datasets: [{
                label: 'Consommation par plein',
                data: consommations,
                backgroundColor: '#FF0000',
                borderColor: '#FF0000',
                borderWidth: 1
            }/*, {
                type: 'line',
                label: 'Moyenne',
                data: Array(consommations.length).fill(moyenne), // Répéter la moyenne pour chaque itération
                borderColor: '#000000',
                backgroundColor: '#000000',
                borderWidth: 1,
            }*/, {
                type: 'line',
                label: 'Courbe de tendance',
                data: trendlineData,
                borderColor: '#0000FF',
                borderWidth: 1,
                fill: false
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

    // Mettre à jour les valeurs dans le HTML
    document.getElementById("consommation").innerText = Math.round(moyenne*1000)/1000 + ' L/100';
    document.getElementById("r2").innerText = Math.round(regressionLine.rSquare*1000)/1000;
    document.getElementById("courbeTendance").innerText = Math.round(regressionLine.slope*1000)/1000 + "x + " + Math.round(regressionLine.intercept*1000)/1000;
}

// Fonction pour calculer la régression linéaire
function linearRegression(x, y) {
    var n = x.length;
    var sumX = 0;
    var sumY = 0;
    var sumXY = 0;
    var sumXX = 0;
    var sumYY = 0;

    for (var i = 0; i < n; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i] * y[i];
        sumXX += x[i] * x[i];
        sumYY += y[i] * y[i];
    }

    var slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    var intercept = (sumY - slope * sumX) / n;
    var rSquare = Math.pow((n * sumXY - sumX * sumY) / Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY)), 2);

    return { slope: slope, intercept: intercept, rSquare: rSquare };
}

// Appeler la fonction pour récupérer les noms des voitures au chargement de la page
window.onload = function() {
    fetchCarNames();
};
