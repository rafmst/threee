import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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

export const db = firebase.firestore()

/**
 * Sign in user to firebase
 */
export const signInWithGoogle = async () => {
  const response = await auth.signInWithPopup(googleProvider)
  if (response.additionalUserInfo?.isNewUser && auth.currentUser !== null) {
    const { uid } = auth.currentUser
    db.collection('configurations')
      .doc(uid)
      .set({
        title_left: '',
        color_left: '',
        title_middle: '',
        color_middle: '',
        title_right: '',
        color_right: '',
      })
      .catch(function (error) {
        console.log(error)
        // Should logout user to avoid any errors
      })
  }
  return
}

/**
 * Sign out user
 */
export const signOut = async () => {
  await auth.signOut()
  return
}
