var kilometres = [];
var volumes = [];
var dates = [];

// Fonction pour récupérer les noms des documents dans la collection "Voitures"
function fetchCarNames() {
    var voitureSelect = document.getElementById("voitureSelect");

    db.collection("Voitures").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var option = document.createElement("option");
            // Remplacer le caractère "+" par "plus"
            option.text = doc.id;
            voitureSelect.add(option);
        });
    }).catch(function (error) {
        console.error("Erreur lors de la récupération des noms de voiture :", error);
    });
}

// Fonction pour convertir une date au format JJ/MM/AAAA en objet Date
function parseDate(dateStr) {
    var parts = dateStr.split('/');
    // Note : mois - 1 car les mois en JavaScript sont de 0 à 11
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

// Fonction pour trier les documents par date
function sortDocumentsByDate(documents) {
    return documents.sort(function (a, b) {
        // Convertir les dates en objets Date
        var dateA = parseDate(a.data().date);
        var dateB = parseDate(b.data().date);
        return dateA - dateB; // Trier par date croissante
    });
}

// Fonction pour récupérer les données des pleins et dessiner le graphique correspondant à la voiture sélectionnée
function fetchAndDrawChart() {
    var selectedCar = document.getElementById("voitureSelect").value;

    if (selectedCar === "aucunChoix") {
        document.getElementById("graphique").style.display = "none";
        document.getElementById("consommation").textContent = "";
        document.getElementById("r2").textContent = "";
        document.getElementById("courbeTendance").textContent = "";
    } else {
        document.getElementById("graphique").style.height = "auto";
        document.getElementById("graphique").style.display = "block";
        document.getElementById("graphique").style.padding = "10px";
        var consommations = [];

        var pleinCollectionRef = db.collection("Voitures").doc(selectedCar).collection("Pleins");

        pleinCollectionRef.get().then(function (querySnapshot) {
            kilometres = [];
            volumes = [];
            dates = [];
            consommations = [];

            // Trier les documents par date
            var sortedDocs = sortDocumentsByDate(querySnapshot.docs);

            sortedDocs.forEach(function (doc) {
                var plein = doc.data();
                kilometres.push(plein.distance);
                volumes.push(plein.volume);
                dates.push(plein.date);
                var consommation = (plein.volume * 100) / plein.distance;
                consommations.push(consommation);
            });

            // Calculer la moyenne des consommations
            var moyenne = calculateMean(consommations);

            // Dessiner le graphique avec la moyenne des consommations
            drawChart(consommations, moyenne);
        }).catch(function (error) {
            console.error("Erreur lors de la récupération des données des pleins :", error);
        });
    }
}

// Fonction pour calculer la moyenne d'un tableau de valeurs
function calculateMean(values) {
    var sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
}

var myChart = null; // Déclarer la variable myChart à l'extérieur de la fonction drawChart

// Fonction pour dessiner le graphique avec ApexCharts
function drawChart(consommations, moyenne) {
    // Détruire le graphique existant s'il y en a un
    if (myChart) {
        myChart.destroy();
    }

    // Calculer la régression linéaire
    var consommationsX = Array.from({ length: consommations.length }, (_, i) => i + 1); // Créer un tableau de valeurs x (itérations)
    var regressionLine = linearRegression(consommationsX, consommations); // Calculer la régression linéaire
    var trendlineData = consommationsX.map(x => regressionLine.slope * x + regressionLine.intercept); // Calculer les valeurs de la courbe de tendance

    var options = {
        chart: {
            type: 'line',
            width: '100%',
            height: '100%',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            responsive: true,
            maintainAspectRatio: false,
        },
        series: [{
            name: 'Consommation',
            data: consommations.map(val => Math.round(val * 1000) / 1000)
        }],
        xaxis: {
            categories: dates,
            labels: {
                show: true,
                rotate: -60,
                rotateAlways: true,
            }
        },
        yaxis: {
            min: 0,
            labels: {
                formatter: function (val) {
                    return val.toFixed(1); // arrondir au millième
                }
            }
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
        theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
                enabled: false,
                color: '#000000',
                shadeTo: 'light'
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val.toFixed(3); // arrondir au millième
                }
            },
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                var km = kilometres;
                var volume = volumes;
                var seriesName = w.globals.seriesNames[seriesIndex]; // Récupérer le nom de la série
                return '<div style="color: black;">' +
                    '<div>' + seriesName + ': ' + series[seriesIndex][dataPointIndex] + ' L/100</div>' +
                    '<div>Kilomètres: ' + km[dataPointIndex] + ' Km</div>' +
                    '<div>Volume: ' + volume[dataPointIndex] + ' L</div>' +
                    '</div>';
            }
        },
        colors: ['#FF0000', '#0000FF'],
        stroke: {
            width: 2
        },
        markers: {
            size: 2
        }
    };

    var chart = new ApexCharts(document.querySelector("#graphique"), options);

    var selectedCar = document.getElementById("voitureSelect").value;

    if (selectedCar === "aucunChoix") {
        chart.destroy();
    } else {
        chart.render();
    }

    // Mettre à jour les valeurs dans le HTML
    document.getElementById("consommation").innerText = Math.round(moyenne * 1000) / 1000 + ' L/100';
    document.getElementById("r2").innerText = Math.round(regressionLine.rSquare * 1000) / 1000;
    document.getElementById("courbeTendance").innerText = Math.round(regressionLine.slope * 1000) / 1000 + "x + " + Math.round(regressionLine.intercept * 1000) / 1000;
}

function rSquared(x, y, coefficients) {
    let regressionSquaredError = 0
    let totalSquaredError = 0

    function yPrediction(x, coefficients) {
        return coefficients[0] + coefficients[1] * x
    }

    let yMean = y.reduce((a, b) => a + b) / y.length

    for (let i = 0; i < x.length; i++) {
        regressionSquaredError += Math.pow(y[i] - yPrediction(x[i], coefficients), 2)
        totalSquaredError += Math.pow(y[i] - yMean, 2)
    }

    return 1 - (regressionSquaredError / totalSquaredError)
}

// Fonction pour calculer la régression linéaire
function linearRegression(x, y) {
    var n = x.length;
    var sumX = 0;
    var sumY = 0;
    var sumXY = 0;
    var sumXX = 0;

    for (var i = 0; i < n; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i] * y[i];
        sumXX += x[i] * x[i];
    }

    var slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    var intercept = (sumY - slope * sumX) / n;

    let rSquare = rSquared(x, y, [intercept, slope]);

    return { slope: slope, intercept: intercept, rSquare: rSquare };
}

// Appeler la fonction pour récupérer les noms des voitures au chargement de la page
window.onload = function () {
    fetchCarNames();
};
