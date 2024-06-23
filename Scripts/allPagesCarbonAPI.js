document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.websitecarbon.com/site?url=https:%2F%2Fwww.gabin221.github.io')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const bilanCarbonElement = document.getElementById('bilanCarbon');
            if (bilanCarbonElement) {
                bilanCarbonElement.textContent = Math.round(data.statistics.co2.grid.grams * 100000) / 100000 + " g";
            } else {
                console.error('Element with ID "bilanCarbon" not found.');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});