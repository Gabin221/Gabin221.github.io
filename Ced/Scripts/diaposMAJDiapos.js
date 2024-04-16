// Référence au dossier Firebase Storage
const storageRef = firebase.storage().ref('Ced/Diapos');

// Fonction pour obtenir les URLs de toutes les images
function getImageUrls() {
    return new Promise((resolve, reject) => {
        storageRef.listAll().then(function(result) {
            const imagePromises = result.items.map(function(imageRef) {
                return imageRef.getDownloadURL();
            });

            Promise.all(imagePromises)
                .then(imageUrls => resolve(imageUrls))
                .catch(error => reject(error));
            }).catch(function(error) {
                reject(error);
            });
    });
}

// Fonction pour charger et afficher les diapositives
function loadSlides() {
    getImageUrls().then(function(imageUrls) {
        const slideshowContainer = document.getElementById('slideshow');
        
        // Effacer les diapositives précédentes
        slideshowContainer.innerHTML = '';

        // Ajouter les nouvelles diapositives
        imageUrls.forEach(function(url) {
            const slide = document.createElement('div');
            slide.className = 'mySlides fade';
            const img = document.createElement('img');
            img.src = url;
            slide.appendChild(img);
            slideshowContainer.appendChild(slide);
        });

        // Initialiser le diaporama
        initSlideshow();
    }).catch(function(error) {
        console.error('Error loading slides:', error);
    });
}

// Fonction pour initialiser le diaporama
function initSlideshow() {
    const slides = document.querySelectorAll('.mySlides');
    let currentSlideIndex = 0;

    // Cacher toutes les diapositives sauf la première
    slides.forEach(function(slide, index) {
        if (index !== currentSlideIndex) {
            slide.style.display = 'none';
        }
    });

    // Changer de diapositive toutes les 5 secondes
    setInterval(function() {
        // Cacher la diapositive actuelle
        slides[currentSlideIndex].style.display = 'none';
        
        // Passer à la diapositive suivante
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        // Afficher la nouvelle diapositive
        slides[currentSlideIndex].style.display = 'block';
    }, 5000); // Rafraîchit toutes les 5 secondes
}

// Charger et afficher les diapositives lorsque la page est chargée
window.onload = function() {
    loadSlides();
}
