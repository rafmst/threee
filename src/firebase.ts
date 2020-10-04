import * as firebase from 'firebase/app'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
})

export const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = async () => {
  await auth.signInWithPopup(googleProvider)
  return
}

export const signOut = async () => {
  await auth.signOut()
  return
}