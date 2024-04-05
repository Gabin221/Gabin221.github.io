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

// Définissez une fonction pour générer un ID unique
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

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
        console.error("Error getting documents:", error);
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

            // Remplacer les caractères "<" par "&lt;" et ">" par "&gt;"
            const sanitizedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');

            // Séparer les lignes de code
            const lines = sanitizedCode.split('\n');

            const codeContent = lines.map((line, index) => {
                return `<div style='margin-right: 5px;'>${index + 1}</div>`;
            }).join('');

            const uniqueId = generateUniqueId();

            const html = `
                <div style='display: inline-block; width: 100%;'>
                    <div class='element' style='display: block; height: auto; border: 1px solid red;'>
                        ${nom}<br><br>
                        ${description}<br><br>
                        <div style='background-color: #f5f2f0; color: black; display: flex; justify-content: space-between; align-items: center; margin: 0; border: 2px solid black;'>
                            <span style='margin-left: 10px; font-size: 16px;'>
                                <b>${langage}</b>
                            </span>
                            <button onclick='copyCode("codeBlock${uniqueId}", "copyButton${uniqueId}")' style='margin-top: 0; float: right; margin: 10px; padding: 5px 10px; font-size: 16px; box-shadow: true; border: 1px solid black; cursor: pointer;' id='copyButton${uniqueId}'>
                                <div id='buttonCopier'>
                                    Copier
                                </div>
                            </button>
                        </div>
                        <div style='line-height: 24px;'>
                            <div style='display: flex; font-size: 16px;'>
                                <div style='background-color: #f5f2f0; width: 10%; display: flex; align-items: flex-start; justify-content: center; height: 100%; align-self: stretch; padding-top: 24px; padding-bottom: 24px; border-top: 0px solid black; border-right: 2px solid black; border-bottom: 2px solid black; border-left: 2px solid black;'>
                                    <div>
                                        ${codeContent}
                                    </div>
                                </div>
                                <pre style='margin-top: 0; padding-left: 10px; width: 90%; height: 100%; float: right; display: flex; align-items: flex-start; align-self: stretch; border-top: 0px solid black; border-right: 2px solid black; border-bottom: 2px solid black; border-left: 0px solid black; overflow: auto;'>
                                    <code style='font-size: 16px;' class='${langageClasses[langage]}' id='codeBlock${uniqueId}' data-language='${langage}'>
${sanitizedCode}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            div.innerHTML += html;
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.error("Error getting document:", error);
    });
}

// Fonction pour récupérer les données et afficher dans la div associée à chaque langage
async function fetchDataAndDisplay() {
    for (const [divID, langage] of Object.entries(langages)) {
        const divElement = document.getElementById(`${divID}`);
        const ids = await getIDsForLanguage(langage);
        ids.forEach((docID) => {
            const path = 'Codes/' + langage + '/' + langage + '/' + docID;
            fetchDataFromFirestore(path, divElement, langage);
        });
    }
}

// Appeler fetchDataAndDisplay
fetchDataAndDisplay();
