import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc,getDoc,setDoc,getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRZDlrcUAHiNnOvvCOfuir4tyxUDKGr-s",
  authDomain: "crwn-clothing-13ee8.firebaseapp.com",
  projectId: "crwn-clothing-13ee8",
  storageBucket: "crwn-clothing-13ee8.appspot.com",
  messagingSenderId: "924361496433",
  appId: "1:924361496433:web:185fec738cba45a1fb88d0"
};

const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInpopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();
export const CreateUserDocument = async (userAuth) => {
    const userDoc = doc(db,"users",userAuth.uid)
    
    const userSnapshot = await getDoc(userDoc)
    
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDoc,{
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log("error creating the user "+error.message);
        }
    }

    return userDoc;
}