var langageClasses = {
    'Python': 'language-python',
    'JavaScript': 'language-javascript',
    'Java': 'language-java',
    'LaTeX': 'language-latex',
    'HTML': 'language-html',
    'C++': 'language-cpp',
    'CSS': 'language-css',
    'C': 'language-c',
    'PHP': 'language-php',
    'Linux': 'language-shell',
    'SQL': 'language-sql',
    'Markdown': 'language-markdown',
    'Arduino': 'language-arduino'
    // Ajoutez d'autres langages et leurs classes ici
};

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

            // Séparer les lignes de code
            const lines = code.split('\n');

            const codeContent = lines.map((line, index) => {
                if (langage === 'Shell') {
                    return `<div style='margin-right: 5px;'>${index + 1}<span style='color: blue;'> :~$</span> ${line}</div>`;
                } else {
                    return `<div style='margin-right: 5px;'>${index + 1}</div>`;
                }
            }).join('');

            const html = `
                <div class='element' style='display: none; height: auto;'>
                    ${description}<br><br>
                    <div style='background-color: #f5f2f0; color: black; display: flex; justify-content: space-between; align-items: center; margin: 0; border-bottom: 1px solid black;'>
                        <span style='margin-left: 10px; font-size: 16px;'>${langage}</span>
                        <button onclick='copyCode("codeBlock", this)' style='margin-top: 0; float: right; margin: 10px; padding: 5px 10px; font-size: 16px; box-shadow: true; border: 1px solid black; cursor: pointer;'><div id='buttonCopier'>Copier</div></button>
                    </div>
                    <div style='line-height: 24px;'>
                        <div style='display: flex; font-size: 16px;'>
                            <div style='background-color: #f5f2f0; width: 10%; display: flex; align-items: flex-start; justify-content: center; height: 100%; align-self: stretch; padding-top: 16px; padding-bottom: 16px;'>
                                <div>
                                    ${codeContent}
                                </div>
                            </div>
                            <pre style='margin-top: 0; width: 90%; height: 100%; float: right; border-left: 1px solid black; display: flex; align-items: flex-start; align-self: stretch;'>
                                <code style='font-size: 16px;' class='${langageClasses[langage]}' id='codeBlock' data-language='${langage}'>${code}</code>
                            </pre>
                        </div>
                    </div>
                </div>
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
        const divElement = document.getElementById(`${divID}`); // Utilisez la notation des templates pour accéder aux div
        const ids = await getIDsForLanguage(langage);
        ids.forEach((docID) => {
            const path = 'Codes/' + langage + '/' + langage + '/' + docID;
            fetchDataFromFirestore(path, divElement, langage);
        });
    }
}

// Appeler fetchDataAndDisplay
fetchDataAndDisplay();
