function commander() {
    var button = document.getElementById("commandButton");
    var buttonText = document.getElementById("buttonText");

    buttonText.textContent = "ÇA ARRIVE";
    
    setTimeout(function () {
        buttonText.textContent = "COMMANDER";
        
    }, 3000);
}