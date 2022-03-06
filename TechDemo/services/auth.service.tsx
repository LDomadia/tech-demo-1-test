import * as authenticate from 'firebase/auth';
import Firebase from '../config/firebase';

const _auth = authenticate.getAuth(Firebase);
const user = _auth.currentUser;

const logIn = async (email: String, password: String) => {

}