import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBjDElF__Bcgo137GGf6hPRXhEp4BatD10",
    authDomain: "recaudaciones-26766.firebaseapp.com",
    projectId: "recaudaciones-26766",
    storageBucket: "recaudaciones-26766.appspot.com",
    messagingSenderId: "793331710217",
    appId: "1:793331710217:web:93d036faa48032a6f53bd8"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const db = firebase.firestore();