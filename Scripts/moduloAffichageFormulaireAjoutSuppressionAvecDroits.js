document.addEventListener('DOMContentLoaded', function() {
    var userRights = localStorage.getItem('userRights');

    if (userRights === "boss"){
        document.getElementById('ajoutSuppressionCode').style.display = "block";
    } else {
        document.getElementById('ajoutSuppressionCode').style.display = "none";
    }
});