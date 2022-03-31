import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const userApi = {
    getMe: ()=>{
        return new Promise((resolve,reject)=>{
            // reject()
            // return
            setTimeout(()=>{
                const currentUser = firebase.auth().currentUser;
                resolve({
                    id: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photoUrl: currentUser.photoURL
                })
                
            },500)
        })
    }
}
export default userApi