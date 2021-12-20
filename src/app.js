import Main from "./components/Main/main";
import { AddChild, New, tailwindAdd } from "./Javascript/tool";
import SignInAndSignUp from "./components/SignIn&SignUp/LogIn";

class App {
    constructor(){
        this.box = New('div')
        this.signIn_SignUp_box = new SignInAndSignUp()
        this.mainApp = new Main()

        this.boxStyle = ['w-full', 'h-screen']

        tailwindAdd(this.boxStyle, this.box)
    }
    render(){
        AddChild(this.box, this.signIn_SignUp_box.render())
        return this.box
    }
}

export default App
//adadsdada