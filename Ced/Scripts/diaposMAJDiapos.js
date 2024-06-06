// Référence à Firebase Storage
const storageRef = firebase.storage().ref('Ced/Diapos');

// Fonction pour récupérer les URLs des images
async function fetchImageUrls() {
    const urls = [];
    try {
        const result = await storageRef.listAll();
        for (const itemRef of result.items) {
            const url = await itemRef.getDownloadURL();
            urls.push(url);
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des images:", error);
    }
    return urls;
}

// Fonction pour afficher les images dans le diaporama
async function displaySlideshow() {
    const imageUrls = await fetchImageUrls();
    const slideshowContainer = document.getElementById('slideshow');
    slideshowContainer.innerHTML = ''; // Clear existing slides

    imageUrls.forEach((url, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'mySlides';
        if (index === 0) slideDiv.style.display = 'block'; // Show the first slide initially

        const imgElement = document.createElement('img');
        imgElement.src = url;

        slideDiv.appendChild(imgElement);
        slideshowContainer.appendChild(slideDiv);
    });

    showSlides();
}

// Fonction pour montrer les diapositives une par une
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Mettre à jour le diaporama périodiquement
setInterval(displaySlideshow, 3000); // Update every 3 seconds

// Initial call to display the slideshow
displaySlideshow();