function logout() {
    sessionStorage.removeItem('userLoggedIn');
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('userRights');
    window.location.href = '../';
}

function login() {
    window.location.href = '../Connexion/index.html';
}

function loginout() {
    if (sessionStorage.getItem('userLoggedIn')) {
        logout();
    } else {
        login();
    }
}