import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjVjSrpoS0ygm159c93RHeNHIo_I8AbTo",
    authDomain: "crwn-db-1ad11.firebaseapp.com",
    databaseURL: "https://crwn-db-1ad11.firebaseio.com",
    projectId: "crwn-db-1ad11",
    storageBucket: "crwn-db-1ad11.appspot.com",
    messagingSenderId: "88554499538",
    appId: "1:88554499538:web:dd0c147d0a44334ac0ec0b",
    measurementId: "G-7KM6G4Z83K"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}



firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;