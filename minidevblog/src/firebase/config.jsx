import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDCEqJCjxF8mADhmKhnrFfeKk9Lp7B8Fi8",
    authDomain: "minidevbloganaliv.firebaseapp.com",
    projectId: "minidevbloganaliv",
    storageBucket: "minidevbloganaliv.appspot.com",
    messagingSenderId: "441612330617",
    appId: "1:441612330617:web:7cec9aadbe4ce3daea16a8",
    measurementId: "G-PWDBLNVBEP"
  }

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}