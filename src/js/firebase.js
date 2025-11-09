
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const saveContact = async (fullName, mail, message) => {
  try{
    const contactRef = ref(database, "contacts");
    const newContactRef = push(contactRef);
    await set(newContactRef, {
      name: fullName,
      mail: mail,
      message: message
    });

    return {status: "success", message: "Mensaje guardado correctamente"}
  }catch(error){
    return {status: "error", message: error.message}
  }

};

export {saveContact};