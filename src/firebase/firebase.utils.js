import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWkuT4HFqSIrZSxdI1Wrn2LMKGthq5Su8",
    authDomain: "crown-clothes-training.firebaseapp.com",
    databaseURL: "https://crown-clothes-training.firebaseio.com",
    projectId: "crown-clothes-training",
    storageBucket: "crown-clothes-training.appspot.com",
    messagingSenderId: "484393673070",
    appId: "1:484393673070:web:142719b3e9bc86e845e17f",
    measurementId: "G-7RE9S1LD8N"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const store = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase