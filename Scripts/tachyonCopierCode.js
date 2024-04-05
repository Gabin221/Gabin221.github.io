function copyCode(elementId, buttonId) {
    // Accédez à l'élément du bouton par son ID
    var bouton = document.getElementById(buttonId);
  
    const codeElement = document.getElementById(elementId);
    const codeText = codeElement.innerText;
  
    // Sauvegardez le texte initial du bouton
    var texteInitial = bouton.innerText;
  
    // Changez la couleur de fond du bouton et le texte
    bouton.style.backgroundColor = "lightgreen";
    bouton.innerText = "Copié !";
  
    // Copiez le texte dans le presse-papiers
    navigator.clipboard.writeText(codeText)
        .then(() => {
            console.log("Le code a été copié !");
            // Retardez le rétablissement de la couleur de fond et du texte du bouton pendant 2 secondes
            setTimeout(function() {
              bouton.style.backgroundColor = ""; // Réinitialisez la couleur de fond
              bouton.innerText = texteInitial; // Rétablissez le texte initial
            }, 1000); // 2 secondes de délai
        })
        .catch((error) => {
            console.error("Erreur lors de la copie du code :", error);
            // Rétablissez la couleur de fond et le texte du bouton après une erreur
            bouton.style.backgroundColor = "red"; // Par exemple, rouge pour une erreur
            bouton.innerText = "Erreur !";
            // Retardez le rétablissement de l'état initial pendant 2 secondes
            setTimeout(function() {
              bouton.style.backgroundColor = ""; // Réinitialisez la couleur de fond
              bouton.innerText = texteInitial; // Rétablissez le texte initial
            }, 1000); // 2 secondes de délai
        });
  }