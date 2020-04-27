// This import is going to give us access to firestore and auth
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = store.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message)
        }
    }

    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = store.collection(collectionKey)
    const batch = store.batch()

    objectsToAdd.forEach(object => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, object)
    })
    return await batch.commit()
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase