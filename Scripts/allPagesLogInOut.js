function logout() {
    sessionStorage.removeItem('userLoggedIn');
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('userRights');
    history.back();
}

function login() {
    window.location.href = '../../Connexion/index.html';
}

function loginout() {
    if (sessionStorage.getItem('userLoggedIn')) {
        logout();
    } else {
        login();
    }
}