const commandeList = document.getElementById('commande-list');
const countContainer = document.getElementById('count-container');

// Écouteurs d'événements pour les cases à cocher
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const selectedArticle = checkbox.value;
        
        // Supprimer toutes les occurrences précédentes de l'élément décoché
        const listItemsToRemove = Array.from(commandeList.getElementsByTagName('li')).filter(function(item) {
            return item.textContent.includes(selectedArticle);
        });
        listItemsToRemove.forEach(function(item) {
            item.remove();
        });

        // Ajouter l'élément à la liste si la case à cocher est cochée
        if (checkbox.checked) {
            const listItem = document.createElement('li');
                    
            // Créer un conteneur <div> pour aligner l'image et le texte
            const containerDiv = document.createElement('div');
            containerDiv.style.display = 'flex';
            containerDiv.style.alignItems = 'center';

            // Ajouter le texte de l'article à l'élément <div>
            const articleText = document.createElement('span');
            articleText.textContent = selectedArticle;

            // Créer un élément <svg> cliquable
            const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            deleteSvg.setAttribute("width", "24");
            deleteSvg.setAttribute("height", "24");
            deleteSvg.style.cursor = 'pointer';
            deleteSvg.style.marginLeft = '5px'; // Ajouter un décalage de 5px vers la gauche
            deleteSvg.style.verticalAlign = 'middle'; // Aligner verticalement au centre
            deleteSvg.innerHTML = '<path xmlns="http://www.w3.org/2000/svg" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />';
                    
            deleteSvg.addEventListener('click', function() {
                // Supprimer l'élément li parent de l'élément <svg>
                listItem.remove();
                
                // Décocher la case à cocher correspondante
                checkbox.checked = false;
                
                // Mettre à jour le nombre d'articles sélectionnés
                updateItemCount();
            });

            // Ajouter l'élément <svg> cliquable à l'élément <div>
            containerDiv.appendChild(articleText);
            containerDiv.appendChild(deleteSvg);

            // Ajouter le conteneur <div> à l'élément li
            listItem.appendChild(containerDiv);
                    
            // Ajouter l'élément li à la liste de commande
            commandeList.appendChild(listItem);
        }

        // Mettre à jour le nombre d'articles sélectionnés
        updateItemCount();
    });
});

function updateItemCount() {
    const itemCount = commandeList.getElementsByTagName('li').length;
    countContainer.textContent = itemCount;
}