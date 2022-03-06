import * as authenticate from 'firebase/auth';
import Firebase from '../config/firebase';

const _auth = authenticate.getAuth(Firebase);
let user = _auth.currentUser;

const signUpEmail = async (fName: string, lName: string, email: string, password: string) => {
    if (user) {
        return 'User is already signed in';
    }
    await authenticate.createUserWithEmailAndPassword(_auth, email, password)
    .then((result) => {
        user = result.user
        return 'Success!';
    })
    .catch((e) => {
        return `${e}`;
    })
}