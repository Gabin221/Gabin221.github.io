const storageRef = firebase.storage().ref('Ced/Diapos');

// Fonction pour récupérer les URLs des images
async function fetchImages() {
  try {
    const imageRefs = await storageRef.listAll();
    const urls = await Promise.all(imageRefs.items.map(item => item.getDownloadURL()));
    return urls;
  } catch (error) {
    console.error("Erreur lors de la récupération des images:", error);
  }
}

// Fonction pour mettre à jour les diapositives
async function updateSlideshow() {
  const slideshow = document.getElementById('slideshow');
  slideshow.innerHTML = ''; // Effacer le contenu précédent

  const urls = await fetchImages();
  if (urls && urls.length > 0) {
    urls.forEach((url, index) => {
      const slide = document.createElement('div');
      slide.classList.add('mySlides');
      if (index === 0) {
        slide.style.display = 'block'; // Afficher la première image
      }

      const img = document.createElement('img');
      img.src = url;
      slide.appendChild(img);
      slideshow.appendChild(slide);
    });

    // Démarrer le diaporama
    startSlideshow();
  }
}

// Fonction pour démarrer le diaporama
function startSlideshow() {
  let slideIndex = 0;
  const slides = document.getElementsByClassName('mySlides');

  function showSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        updateSlideshow();
        console.log('Slideshow');
      slideIndex = 1; // Réinitialiser à la première diapositive
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlide, 3000); // Changer d'image toutes les 3 secondes
  }

  showSlide();
}

// Mettre à jour les images toutes les 5 minutes (300000 ms)
// setInterval(updateSlideshow, 10000);

// Charger les images lors du premier chargement de la page
window.onload = updateSlideshow;