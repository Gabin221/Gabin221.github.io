// Fonction pour récupérer les données des pleins depuis Firestore et dessiner le graphique
function fetchAndDrawChart() {
    var consommations = []; // Tableau pour stocker les consommations (volume * 100 / distance)

    // Récupérer les données des pleins depuis Firestore
    var pleinCollectionRef = db.collection('Voitures').doc('206+').collection('Pleins');

    // Récupérer tous les documents de la collection "Pleins"
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
        console.error("Erreur lors de la récupération des documents :", error);
    });
}

// Fonction pour calculer la moyenne d'un tableau de valeurs
function calculateMean(values) {
    var sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
}

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
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                type: 'line',
                label: 'Moyenne',
                data: Array(consommations.length).fill(moyenne), // Répéter la moyenne pour chaque itération
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                borderDash: [5, 5] // Lignes en pointillés
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

// Appeler la fonction pour récupérer les données et dessiner le graphique au chargement de la page
window.onload = function() {
    fetchAndDrawChart();
};
