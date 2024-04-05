function copyCode(elementId, buttonId) {
    var button = document.getElementById(buttonId);

    const codeElement = document.getElementById(elementId);
    const codeText = codeElement.innerText;

    var initialText = button.innerText;

    button.style.backgroundColor = "lightgreen";
    button.innerText = "Copié !";

    navigator.clipboard.writeText(codeText)
        .then(() => {
            console.log("Le code a été copié !");
            setTimeout(function() {
                button.style.backgroundColor = "";
                button.innerText = initialText;
            }, 1000);
        })
        .catch((error) => {
            console.error("Erreur lors de la copie du code :", error);
            button.style.backgroundColor = "red";
            button.innerText = "Erreur !";
            setTimeout(function() {
                button.style.backgroundColor = "";
                button.innerText = initialText;
            }, 1000);
        });
}
