import { signInWithEmailAndPassword } from "firebase/auth";
import Main from "./components/Main/main";
import { AddChild, New, tailwindAdd } from "./Javascript/tool";
import { auth } from "./Javascript/firebase";
import Login from "./components/Log In/LogIn";

class App {
    constructor(){
        this.box = New('div')
        this.signIn = new Login
        this.signUp = null 
        this.mainApp = new Main()

        this.boxStyle = ['w-full', 'h-screen']

        tailwindAdd(this.boxStyle, this.box)
    }
    goMain(){
        this.box.children[0].remove
        AddChild(this.box, this.mainApp.render())
    }
    render(){
        AddChild(this.box, this.signIn.render(this.goMain.bind(this)))
        return this.box
    }
}

export default App