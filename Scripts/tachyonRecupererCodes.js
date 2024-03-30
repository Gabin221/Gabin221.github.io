var langages = {
    divCContenu: "C",
    divCppContenu: "C++",
    divKotlinContenu: "Kotlin",
    divLatexContenu: "LaTeX",
    divLignesDeCommandesContenu: "Ligne de commande",
    divPythonContenu: "Python",
    divShellContenu: "Shell",
    divWebContenu: "Web"
};

// Fonction pour récupérer la liste des IDs pour un langage donné
function getIDsForLanguage(langage) {
    const path = 'Codes/' + langage + '/' + langage;
    return db.collection(path).get().then((querySnapshot) => {
        const ids = [];
        querySnapshot.forEach((doc) => {
            ids.push(doc.id);
        });
        return ids;
    }).catch((error) => {
        console.log("Error getting documents:", error);
    });
}

// Fonction pour récupérer les données à partir d'un chemin spécifique dans Firestore et les afficher
function fetchDataFromFirestore(path, div, langage) {
    db.doc(path).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            const nom = data.Nom;
            const description = data.Description;
            const code = data.Code;

            const html = `
                <p>Nom: ${nom}</p>
                <p>Description: ${description}</p>
                <p>Code:</p>
                <pre><code>${code}</code></pre> <!-- Utilisation de balises pre et code pour conserver la mise en forme -->
            `;

            div.innerHTML += html;
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

// Fonction pour récupérer les données et afficher dans la div associée à chaque langage
async function fetchDataAndDisplay() {
    for (const [divID, langage] of Object.entries(langages)) {
        const divElement = document.getElementById(divID);
        const ids = await getIDsForLanguage(langage);
        ids.forEach((docID) => {
            const path = 'Codes/' + langage + '/' + langage + '/' + docID;
            fetchDataFromFirestore(path, divElement, langage);
        });
    }
}

// Appeler fetchDataAndDisplay
fetchDataAndDisplay();