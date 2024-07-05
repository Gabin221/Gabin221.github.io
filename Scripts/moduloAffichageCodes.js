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
    'Linux': 'language-bash',
    'SQL': 'language-sql',
    'Markdown': 'language-markdown',
    'Arduino': 'language-arduino'
};

var langages = {
    divCContenu: "C",
    divCppContenu: "C++",
    divKotlinContenu: "Kotlin",
    divLatexContenu: "LaTeX",
    divLignesDeCommandesContenu: "Ligne de commande",
    divLinuxContenu: "Linux",
    divPythonContenu: "Python",
    divBashContenu: "Bash",
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

function fetchDataFromFirestore(path, div, langage) {
    db.doc(path).get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            const nom = data.Nom;
            const description = data.Description;
            const code = data.Code;

            switch(langage) {
                case "C++":
                    var menuHorizontalPartieCpp = document.getElementById("menuHorizontalPartieCpp");
                    var cpp = document.getElementById("cpp");
                    var random = Math.random().toString();
                    var newMenuItem = document.createElement("div");
                    newMenuItem.textContent = nom;
                    newMenuItem.classList.add("elementMenuHorizontalPartieCpp");
                    newMenuItem.setAttribute("data-langage", random);
                    menuHorizontalPartieCpp.appendChild(newMenuItem);
                    var newCode = document.createElement("div");
                    newCode.innerHTML = `
                        <div style='display: inline-block; width: 100%;'>
                            <div class='element' style='display: block; height: auto;'>
                                <h4>${nom}</h4>
                                <p style='white-space: normal; text-align: left;'>${description}</p><br><br>
                                <div style='background-color: #f5f2f0; color: black; display: flex; justify-content: space-between; align-items: center; margin: 0; border: 2px solid black;'>
                                    <span style='margin-left: 10px; font-size: 16px;'>
                                        <b>${langage}</b>
                                    </span>
                                    <button onclick='copyCode("codeBlock${random}", "copyButton${random}")' style='margin-top: 0; float: right; margin: 10px; padding: 5px 10px; font-size: 16px; box-shadow: true; border: 1px solid black; cursor: pointer;' id='copyButton${random}'>
                                        Copier
                                    </button>
                                </div>
                                <pre style='margin-top: 0; padding-left: 10px; width: 100%; height: 100%; float: right; display: flex; align-items: flex-start; align-self: stretch; border: 2px solid black; overflow: auto;'>
                                    <code id='codeBlock${random}' class='language-${langage.toLowerCase()} line-numbers' data-language='${langage}'>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
                                </pre>
                            </div>
                        </div>
                    `;
                    cpp.classList.add("container");
                    newCode.classList.add("contenuLangagePartieCpp");
                    newCode.setAttribute("id", random);
                    cpp.appendChild(newCode);

                    Prism.highlightAll();
                    addMenuEventListeners();
                    break;
                case "Kotlin":
                    var menuHorizontalPartieKotlin = document.getElementById("menuHorizontalPartieKotlin");
                    var kotlin = document.getElementById("kotlin");
                    var random = Math.random().toString();
                    var newMenuItem = document.createElement("div");
                    newMenuItem.textContent = nom;
                    newMenuItem.classList.add("elementMenuHorizontalPartieKotlin");
                    newMenuItem.setAttribute("data-langage", random);
                    menuHorizontalPartieKotlin.appendChild(newMenuItem);
                    var newCode = document.createElement("div");
                    newCode.innerHTML = `
                        <div style='display: inline-block; width: 100%;'>
                            <div class='element' style='display: block; height: auto;'>
                                <h4>${nom}</h4>
                                <p style='white-space: normal; text-align: left;'>${description}</p><br><br>
                                <div style='background-color: #f5f2f0; color: black; display: flex; justify-content: space-between; align-items: center; margin: 0; border: 2px solid black;'>
                                    <span style='margin-left: 10px; font-size: 16px;'>
                                        <b>${langage}</b>
                                    </span>
                                    <button onclick='copyCode("codeBlock${random}", "copyButton${random}")' style='margin-top: 0; float: right; margin: 10px; padding: 5px 10px; font-size: 16px; box-shadow: true; border: 1px solid black; cursor: pointer;' id='copyButton${random}'>
                                        Copier
                                    </button>
                                </div>
                                <pre style='margin-top: 0; padding-left: 10px; width: 100%; height: 100%; float: right; display: flex; align-items: flex-start; align-self: stretch; border: 2px solid black; overflow: auto;'>
                                    <code id='codeBlock${random}' class='language-${langage.toLowerCase()} line-numbers' data-language='${langage}'>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
                                </pre>
                            </div>
                        </div>
                    `;
                    kotlin.classList.add("container");
                    newCode.classList.add("contenuLangagePartieKotlin");
                    newCode.setAttribute("id", random);
                    kotlin.appendChild(newCode);

                    Prism.highlightAll();
                    addMenuEventListeners();
                    break;
                case "LaTeX":
                    var menuHorizontalPartieLatex = document.getElementById("menuHorizontalPartieLatex");
                    var latex = document.getElementById("latex");
                    var random = Math.random().toString();
                    var newMenuItem = document.createElement("div");
                    newMenuItem.textContent = nom;
                    newMenuItem.classList.add("elementMenuHorizontalPartieLatex");
                    newMenuItem.setAttribute("data-langage", random);
                    menuHorizontalPartieLatex.appendChild(newMenuItem);
                    var newCode = document.createElement("div");
                    newCode.innerHTML = `
                        <div style='display: inline-block; width: 100%;'>
                            <div class='element' style='display: block; height: auto;'>
                                <h4>${nom}</h4>
                                <p style='white-space: normal; text-align: left;'>${description}</p><br><br>
                                <div style='background-color: #f5f2f0; color: black; display: flex; justify-content: space-between; align-items: center; margin: 0; border: 2px solid black;'>
                                    <span style='margin-left: 10px; font-size: 16px;'>
                                        <b>${langage}</b>
                                    </span>
                                    <button onclick='copyCode("codeBlock${random}", "copyButton${random}")' style='margin-top: 0; float: right; margin: 10px; padding: 5px 10px; font-size: 16px; box-shadow: true; border: 1px solid black; cursor: pointer;' id='copyButton${random}'>
                                        Copier
                                    </button>
                                </div>
                                <pre style='margin-top: 0; padding-left: 10px; width: 100%; height: 100%; float: right; display: flex; align-items: flex-start; align-self: stretch; border: 2px solid black; overflow: auto;'>
                                    <code id='codeBlock${random}' class='language-${langage.toLowerCase()} line-numbers' data-language='${langage}'>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
                                </pre>
                            </div>
                        </div>
                    `;
                    latex.classList.add("container");
                    newCode.classList.add("contenuLangagePartieLatex");
                    newCode.setAttribute("id", random);
                    latex.appendChild(newCode);

                    Prism.highlightAll();
                    addMenuEventListeners();
                    break;
                case "Linux":
                    var menuHorizontalPartieLinux = document.getElementById("menuHorizontalPartieLinux");
                    var linux = document.getElementById("linux");
                    var random = Math.random().toString();
                    var newMenuItem = document.createElement("div");
                    newMenuItem.textContent = nom;
                    newMenuItem.classList.add("elementMenuHorizontalPartieLinux");
                    newMenuItem.setAttribute("data-langage", random);
                    menuHorizontalPartieLinux.appendChild(newMenuItem);
                    var newCode = document.createElement("div");
                    newCode.innerHTML = `
                        <div style='display: inline-block; width: 100%;'>
                            <div class='element' style='display: block; height: auto;'>
                                <h4>${nom}</h4>
                                <p style='white-space: normal; text-align: left;'>${description}</p><br><br>
                                <div style='background-color: #f5f2f0; color: black; display: flex; justify-content: space-between; align-items: center; margin: 0; border: 2px solid black;'>
                                    <span style='margin-left: 10px; font-size: 16px;'>
                                        <b>${langage}</b>
                                    </span>
                                    <button onclick='copyCode("codeBlock${random}", "copyButton${random}")' style='margin-top: 0; float: right; margin: 10px; padding: 5px 10px; font-size: 16px; box-shadow: true; border: 1px solid black; cursor: pointer;' id='copyButton${random}'>
                                        Copier
                                    </button>
                                </div>
                                <pre style='margin-top: 0; padding-left: 10px; width: 100%; height: 100%; float: right; display: flex; align-items: flex-start; align-self: stretch; border: 2px solid black; overflow: auto;'>
                                    <code id='codeBlock${random}' class='language-${langage.toLowerCase()} line-numbers' data-language='${langage}'>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
                                </pre>
                            </div>
                        </div>
                    `;
                    linux.classList.add("container");
                    newCode.classList.add("contenuLangagePartieLinux");
                    newCode.setAttribute("id", random);
                    linux.appendChild(newCode);

                    Prism.highlightAll();
                    addMenuEventListeners();
                    break;
                case "Python":
                    var menuHorizontalPartiePython = document.getElementById("menuHorizontalPartiePython");
                    var python = document.getElementById("python");
                    var random = Math.random().toString();
                    var newMenuItem = document.createElement("div");
                    newMenuItem.textContent = nom;
                    newMenuItem.classList.add("elementMenuHorizontalPartiePython");
                    newMenuItem.setAttribute("data-langage", random);
                    menuHorizontalPartiePython.appendChild(newMenuItem);
                    var newCode = document.createElement("div");
                    newCode.innerHTML = `
                        <div style='display: inline-block; width: 100%;'>
                            <div class='element' style='display: block; height: auto;'>
                                <h4>${nom}</h4>
                                <p style='white-space: normal; text-align: left;'>${description}</p><br><br>
                                <div style='background-color: #f5f2f0; color: black; display: flex; justify-content: space-between; align-items: center; margin: 0; border: 2px solid black;'>
                                    <span style='margin-left: 10px; font-size: 16px;'>
                                        <b>${langage}</b>
                                    </span>
                                    <button onclick='copyCode("codeBlock${random}", "copyButton${random}")' style='margin-top: 0; float: right; margin: 10px; padding: 5px 10px; font-size: 16px; box-shadow: true; border: 1px solid black; cursor: pointer;' id='copyButton${random}'>
                                        Copier
                                    </button>
                                </div>
                                <pre style='margin-top: 0; padding-left: 10px; width: 100%; height: 100%; float: right; display: flex; align-items: flex-start; align-self: stretch; border: 2px solid black; overflow: auto;'>
                                    <code id='codeBlock${random}' class='language-${langage.toLowerCase()} line-numbers' data-language='${langage}'>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
                                </pre>
                            </div>
                        </div>
                    `;
                    python.classList.add("container");
                    newCode.classList.add("contenuLangagePartiePython");
                    newCode.setAttribute("id", random);
                    python.appendChild(newCode);

                    Prism.highlightAll();
                    addMenuEventListeners();
                    break;
                case "Bash":
                    var menuHorizontalPartieBash = document.getElementById("menuHorizontalPartieBash");
                    var bash = document.getElementById("bash");
                    var random = Math.random().toString();
                    var newMenuItem = document.createElement("div");
                    newMenuItem.textContent = nom;
                    newMenuItem.classList.add("elementMenuHorizontalPartieBash");
                    newMenuItem.setAttribute("data-langage", random);
                    menuHorizontalPartieBash.appendChild(newMenuItem);
                    var newCode = document.createElement("div");
                    newCode.innerHTML = `
                        <div style='display: inline-block; width: 100%;'>
                            <div class='element' style='display: block; height: auto;'>
                                <h4>${nom}</h4>
                                <p style='white-space: normal; text-align: left;'>${description}</p><br><br>
                                <div style='background-color: #f5f2f0; color: black; display: flex; justify-content: space-between; align-items: center; margin: 0; border: 2px solid black;'>
                                    <span style='margin-left: 10px; font-size: 16px;'>
                                        <b>${langage}</b>
                                    </span>
                                    <button onclick='copyCode("codeBlock${random}", "copyButton${random}")' style='margin-top: 0; float: right; margin: 10px; padding: 5px 10px; font-size: 16px; box-shadow: true; border: 1px solid black; cursor: pointer;' id='copyButton${random}'>
                                        Copier
                                    </button>
                                </div>
                                <pre style='margin-top: 0; padding-left: 10px; width: 100%; height: 100%; float: right; display: flex; align-items: flex-start; align-self: stretch; border: 2px solid black; overflow: auto;'>
                                    <code id='codeBlock${random}' class='language-${langage.toLowerCase()} line-numbers' data-language='${langage}'>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
                                </pre>
                            </div>
                        </div>
                    `;
                    bash.classList.add("container");
                    newCode.classList.add("contenuLangagePartieBash");
                    newCode.setAttribute("id", random);
                    bash.appendChild(newCode);

                    Prism.highlightAll();
                    addMenuEventListeners();
                    break;
                case "Web":
                    var menuHorizontalPartieWeb = document.getElementById("menuHorizontalPartieWeb");
                    var web = document.getElementById("web");
                    var random = Math.random().toString();
                    var newMenuItem = document.createElement("div");
                    newMenuItem.textContent = nom;
                    newMenuItem.classList.add("elementMenuHorizontalPartieWeb");
                    newMenuItem.setAttribute("data-langage", random);
                    menuHorizontalPartieWeb.appendChild(newMenuItem);
                    var newCode = document.createElement("div");
                    newCode.innerHTML = `
                        <div style='display: inline-block; width: 100%;'>
                            <div class='element' style='display: block; height: auto;'>
                                <h4>${nom}</h4>
                                <p style='white-space: normal; text-align: left;'>${description}</p><br><br>
                                <div style='background-color: #f5f2f0; color: black; display: flex; justify-content: space-between; align-items: center; margin: 0; border: 2px solid black;'>
                                    <span style='margin-left: 10px; font-size: 16px;'>
                                        <b>${langage}</b>
                                    </span>
                                    <button onclick='copyCode("codeBlock${random}", "copyButton${random}")' style='margin-top: 0; float: right; margin: 10px; padding: 5px 10px; font-size: 16px; box-shadow: true; border: 1px solid black; cursor: pointer;' id='copyButton${random}'>
                                        Copier
                                    </button>
                                </div>
                                <pre style='margin-top: 0; padding-left: 10px; width: 100%; height: 100%; float: right; display: flex; align-items: flex-start; align-self: stretch; border: 2px solid black; overflow: auto;'>
                                    <code id='codeBlock${random}' class='language-${langage.toLowerCase()} line-numbers' data-language='${langage}'>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
                                </pre>
                            </div>
                        </div>
                    `;
                    web.classList.add("container");
                    newCode.classList.add("contenuLangagePartieWeb");
                    newCode.setAttribute("id", random);
                    web.appendChild(newCode);

                    Prism.highlightAll();
                    addMenuEventListeners();
                    break;
            }
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

window.addEventListener("load", (event) => {
    fetchDataAndDisplay();
    addMenuEventListeners();
});