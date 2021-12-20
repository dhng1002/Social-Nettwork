import { signInWithEmailAndPassword } from "firebase/auth";
import currentApp from "../..";
import Brigde from "../../Javascript/Brigde";
import { auth } from "../../Javascript/firebase";
import { New, SetAtt } from "../../Javascript/tool";

const brigde = new Brigde()
class Login {
    constructor(){
        this.box = New('div')
    }
    render(callback){
        signInWithEmailAndPassword(auth, prompt('email'), prompt('pass'))
            .then((userCredential) => {
                callback()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });
        return this.box
    }
}

export default Login