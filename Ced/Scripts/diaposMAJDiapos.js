const storageRef = firebase.storage().ref('Ced/Diapos');

async function getImageUrls() {
    try {
        const result = await storageRef.listAll();
        const imagePromises = result.items.map(imageRef => imageRef.getDownloadURL());
        const imageUrls = await Promise.all(imagePromises);
        return imageUrls;
    } catch (error) {
        throw new Error('Failed to get image URLs: ' + error.message);
    }
}

async function loadSlides() {
    try {
        const imageUrls = await getImageUrls();
        const slideshowContainer = document.getElementById('slideshow');
        
        slideshowContainer.innerHTML = '';

        imageUrls.forEach(function(url) {
            const slide = document.createElement('div');
            slide.className = 'mySlides fade';
            const img = document.createElement('img');
            img.src = url;
            slide.appendChild(img);
            slideshowContainer.appendChild(slide);
        });

        initSlideshow();
    } catch (error) {
        console.error('Error loading slides:', error);
    }
}

function initSlideshow() {
    const slides = document.querySelectorAll('.mySlides');
    let currentSlideIndex = 0;

    slides.forEach(function(slide, index) {
        if (index !== currentSlideIndex) {
            slide.style.display = 'none';
        }
    });

    setInterval(function() {
        slides[currentSlideIndex].style.display = 'none';
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].style.display = 'block';
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    loadSlides();
});
