import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { firebaseConfig } from './firebaseInfo'

const FirebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(FirebaseApp)
// export const db = getFirestore(FirebaseApp)
// export const storage = getStorage(FirebaseApp)