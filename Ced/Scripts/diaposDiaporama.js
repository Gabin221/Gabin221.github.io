// Fonction pour charger les images depuis Firebase Storage et les afficher dans le diaporama
function loadImages() {
    const sliderContainer = document.getElementById('slider-container');
    const menu = document.getElementById('menu');
    const loadedImageUrls = new Set(); // Ensemble pour stocker les URLs des images déjà chargées
  
    // Référence au dossier Firebase Storage
    const storageRef = firebase.storage().ref('Ced/Diapos');
  
    // Obtenir les URLs des images dans le dossier
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(imageRef, index) {
        imageRef.getDownloadURL().then(function(url) {
          // Vérifier si l'URL de l'image est déjà chargée
          if (!loadedImageUrls.has(url)) {
            // Créer un input radio et une étiquette pour chaque image
            const input = document.createElement('input');
            input.className = 'slide-input';
            input.id = 'slide-dot-' + (index + 1);
            input.type = 'radio';
            input.name = 'slides';
            if (index === 0) input.checked = true;
            
            const label = document.createElement('label');
            label.htmlFor = 'slide-dot-' + (index + 1);
            menu.appendChild(label);
  
            // Créer un élément d'image et l'ajouter au diaporama
            const img = document.createElement('img');
            img.src = url;
            img.className = 'slide-img';
            sliderContainer.appendChild(input);
            sliderContainer.appendChild(img);
  
            // Ajouter l'URL de l'image à l'ensemble des URLs chargées
            loadedImageUrls.add(url);
          }
        }).catch(function(error) {
          console.error('Error getting download URL:', error);
        });
      });
    }).catch(function(error) {
      console.error('Error listing files:', error);
    });
  }
  
  // Charger les images lorsque la page est chargée
  window.onload = function() {
    loadImages();
  }