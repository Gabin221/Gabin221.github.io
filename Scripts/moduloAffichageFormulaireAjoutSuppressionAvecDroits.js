document.addEventListener('DOMContentLoaded', function() {
    var userRights = sessionStorage.getItem('userRights');

    if (userRights === "boss"){
        document.getElementById('ajoutSuppressionCode').style.display = "block";
    } else {
        document.getElementById('ajoutSuppressionCode').style.display = "none";
    }
});