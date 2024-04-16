// Au chargement de la page, téléchargez les images et mettez à jour le diaporama
window.onload = function() {
    // Référence au dossier Firebase Storage
    const storageRef = firebase.storage().ref('Ced/Diapos');
  
    // Observer les modifications dans le dossier Firebase Storage
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(imageRef) {
        // Obtenez l'URL de téléchargement de l'image
        imageRef.getDownloadURL().then(function(url) {
          // Mettez à jour le diaporama avec la nouvelle image
          addImageToSlideshow(url);
        }).catch(function(error) {
          console.error('Error getting download URL:', error);
        });
      });
    }).catch(function(error) {
      console.error('Error listing files:', error);
    });
  };
  
// Fonction pour ajouter une image au diaporama
function addImageToSlideshow(imageUrl) {
  // Créez un élément d'image
  const img = document.createElement('img');
  img.src = imageUrl;
  
  // Ajoutez l'image au diaporama
  const slideshow = document.getElementById('slideshow');
  slideshow.appendChild(img);
}
