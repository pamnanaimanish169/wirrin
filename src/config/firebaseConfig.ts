import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsJJWGzcFypidBA11t_u61Jo5ylN_QChM",
  authDomain: "wirrin-1c080.firebaseapp.com",
  databaseURL: "https://wirrin-1c080-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "wirrin-1c080",
  storageBucket: "wirrin-1c080.appspot.com",
  messagingSenderId: "972432504735",
  appId: "1:972432504735:web:69a4d411b0167d0526afaa",
  measurementId: "G-FLLP73C4HK"
}

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);