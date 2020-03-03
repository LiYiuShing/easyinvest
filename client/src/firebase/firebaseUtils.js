import firebase from 'firebase/app';
import firebaseui from 'firebaseui';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_API_DOMAIN,
    databaseURL: process.env.REACT_APP_API_DATABASE,
    projectId: process.env.REACT_APP_API_PROJECT_ID,
    storageBucket: process.env.REACT_APP_API_STORAGE,
    messagingSenderId: process.env.REACT_APP_API_MESSAGE,
    appId: process.env.REACT_APP_API_APP_ID,
    measurementId: process.env.REACT_APP_API_MEASUREMENT_ID
}

const fireApp = firebase.initializeApp(firebaseConfig);

export const auth = fireApp.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscibe = auth.onAuthStateChanged(userAuth => {
            unsubscibe();
            resolve(userAuth);
        }, reject)
    })
}

export default firebase;