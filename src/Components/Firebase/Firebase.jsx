
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage()
const firestore = getFirestore()




const fetchFromFirestore = async()=>{

    try{
        const productsCollection = collection(firestore,'products')
        const productsSnapshot = await getDocs(productsCollection)
        const productList = productsSnapshot.docs.map(doc=>({

            id:doc.id,
            ...doc.data()
        }))
        console.log('Fetched products from Firestore',productList)
        return productList
    }catch(error){
        console.log('error fetching products from Firestore:',error)
        return []
    }

}

const logout = ()=>{
    signOut(auth)
}

export{
    auth,provider,storage,firestore,fetchFromFirestore,logout
}