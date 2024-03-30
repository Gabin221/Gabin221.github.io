document.addEventListener('DOMContentLoaded', function() {
    var userLoggedIn = localStorage.getItem('userLoggedIn');

    if (userLoggedIn){
        document.getElementById('logOutButton').style.display = "block";
        document.getElementById('logInButton').style.display = "none";
    } else {
        document.getElementById('logOutButton').style.display = "none";
        document.getElementById('logInButton').style.display = "block";
    }
});