import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// firebase initialization
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
