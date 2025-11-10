
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

//contactame
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


//reseñas de productos


//guardar reseña

const saveReview = async (productID, name, text)=>{
  try{
    const reviewRef = ref(database, `productReviews/${productID}`);
    const newReviewRef = push(reviewRef);
    await set(newReviewRef, {
      name: name,
      text: text
    });

    return {status:"success", message:"Reseña guardada exitosamente"}

  }catch(e){
    return {status:"error", message:e.message}
  }

};

//cargar reseñas
const loadReview = async(productID)=>{
  try{
    const reviewRef = ref(database, `productReviews/${productID}`); 
    const snapshot = await get(reviewRef);
    console.log(snapshot.exists());
    if(snapshot.exists()){
      const result = snapshot.val(); 
      return {status: "success", result}
    }else{
      return {status:"empty", message:"No hay reseñas todavía"}
    }
    
  }catch(e){
    return {status:"error", message:e.message}
  }
};



export {saveContact, saveReview, loadReview};