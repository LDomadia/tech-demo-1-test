import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();

// AUTHENTICATION // ---------------------------------------------------------
export const signUpWithEmail = async (fName: string, lName: string, email: string, password: string) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Success!')
    } catch (e) {
        console.log(e);
    }
}

// FIRESTORE // --------------------------------------------------------------
export const addToCollection = () => {
    
}

export const myFunction = (fName: string) => {
    console.log(fName)
}