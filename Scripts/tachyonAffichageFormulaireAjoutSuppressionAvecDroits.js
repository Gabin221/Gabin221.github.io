document.addEventListener('DOMContentLoaded', function() {
    var userRights = localStorage.getItem('userRights');
    var userLoggedIn = localStorage.getItem('userLoggedIn');

    if (userRights === "boss"){
        document.getElementById('ajoutSuppressionCode').style.display = "block";
    } else {
        document.getElementById('ajoutSuppressionCode').style.display = "none";
    }

    if (userLoggedIn){
        document.getElementById('logOutButton').style.display = "block";
        document.getElementById('logInButton').style.display = "none";
    } else {
        document.getElementById('logOutButton').style.display = "none";
        document.getElementById('logInButton').style.display = "block";
    }
});