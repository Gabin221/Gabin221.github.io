// Fonction pour récupérer les noms des voitures à partir de la collection "Voitures"
function fetchCarNames() {
    db.collection("Voitures").get().then(querySnapshot => {
        const voitureSelect = document.getElementById("voitureSelect");
        
        querySnapshot.forEach(function(doc) {
            const option = document.createElement("option");
            option.value = doc.id;
            option.textContent = doc.id;
            voitureSelect.appendChild(option);
        });
    }).catch(function(error) {
        console.error("Erreur lors de la récupération des noms de voiture :", error);
    });
}

// Fonction pour récupérer les données des pleins et dessiner le graphique correspondant à la voiture sélectionnée
function fetchAndDrawChart() {
    var selectedCar = document.getElementById("voitureSelect").value;
    console.log("Voiture sélectionnée:", selectedCar); // Ajout du message de débogage

    var consommations = [];

    var pleinCollectionRef = db.collection("Voitures").doc(selectedCar).collection("Pleins");

    pleinCollectionRef.get().then(function(querySnapshot) {
        console.log("Query snapshot:", querySnapshot); // Ajout du message de débogage
        querySnapshot.forEach(function(doc) {
            console.log("Document data:", doc.data()); // Ajout du message de débogage
            var plein = doc.data();
            var consommation = (plein.volume * 100) / plein.distance;
            consommations.push(consommation);
        });

        drawChart(consommations);
    }).catch(function(error) {
        console.error("Erreur lors de la récupération des données des pleins :", error);
    });
}

// Variable globale pour stocker l'instance du graphique
var myChart = null;

// Fonction pour dessiner le graphique avec Chart.js
function drawChart(consommations) {
    var ctx = document.getElementById("myChart").getContext("2d");
    
    // Vérifiez si un graphique existe déjà, si oui, détruisez-le
    if (myChart !== null) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: Array.from({ length: consommations.length }, (_, i) => i + 1), // Itérations
            datasets: [{
                label: "Consommation par plein",
                data: consommations,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
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
