import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

const initializationAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuthentication;

