const firebaseConfig = {
    apiKey: "AIzaSyDMDW_cM2CGBLoHfLr75qXAfIF7w02MI7U",
    authDomain: "gabin-s-bar.firebaseapp.com",
    projectId: "gabin-s-bar",
    storageBucket: "gabin-s-bar.appspot.com",
    messagingSenderId: "64743999090",
    appId: "1:64743999090:web:41b193b218ec3726f964eb",
    measurementId: "G-Q8MTX3X4JB"
};

firebase.initializeApp(firebaseConfig);
		
const db = firebase.firestore();
//const storage = firebase.storage();