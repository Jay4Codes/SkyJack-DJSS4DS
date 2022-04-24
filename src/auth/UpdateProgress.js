import db from '../firebase/firebase'
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { Decrypt } from './Decrypt'
import Cookies from'js-cookie'


export const UpdateProgress = (qId) => {
    const userId = Decrypt(Cookies.get('user')).id
    //update user checkpointslar
    const userDocRef = doc(db, `dbcooper_teams/${userId}`)
    updateDoc(userDocRef, {
        checkpoints: arrayUnion({checkpoint_id:`c${qId}`, timestamp: Date()})
    })
}