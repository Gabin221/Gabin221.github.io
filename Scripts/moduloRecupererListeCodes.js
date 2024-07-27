const codeASupprimer = document.getElementById('codeASupprimer');

db.collection("Codes").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var codesType = doc.id;
        db.collection("Codes").doc(codesType).collection(codesType).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var code = doc.data();
                 var option = document.createElement('option');

                // Afficher la liste des code en fonction de leur langage
                switch (codesType) {
                    case "Bash":                        
                        option.value = code['Nom'];
                        option.textContent = code['Nom'];
                        codeASupprimer.appendChild(option);
                        break;
                    case "C++":                        
                        option.value = code['Nom'];
                        option.textContent = code['Nom'];
                        codeASupprimer.appendChild(option);
                        break;
                    case "Kotlin":                        
                        option.value = code['Nom'];
                        option.textContent = code['Nom'];
                        codeASupprimer.appendChild(option);
                        break;
                    case "LaTeX":                        
                        option.value = code['Nom'];
                        option.textContent = code['Nom'];
                        codeASupprimer.appendChild(option);
                        break;
                    case "Linux":                        
                        option.value = code['Nom'];
                        option.textContent = code['Nom'];
                        codeASupprimer.appendChild(option);
                        break;
                    case "Python":                        
                        option.value = code['Nom'];
                        option.textContent = code['Nom'];
                        codeASupprimer.appendChild(option);
                        break;
                    case "Markdown":                        
                        option.value = code['Nom'];
                        option.textContent = code['Nom'];
                        codeASupprimer.appendChild(option);
                        break;
                    case "Web":                        
                        option.value = code['Nom'];
                        option.textContent = code['Nom'];
                        codeASupprimer.appendChild(option);
                        break;
                    default:
                        break;
                }
            });
        }).catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    });
}).catch((error) => {
    console.error('Erreur lors de la récupération des données:', error);
});
