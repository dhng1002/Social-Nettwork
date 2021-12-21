import Main from "./components/Main/main";
import { AddChild, New, tailwindAdd } from "./Javascript/tool";
import SignInAndSignUp from "./components/SignIn&SignUp/SignInAndSignUp";

class App {
    constructor(){
        this.box = New('div')
        this.background = New('div')
        this.signIn_SignUp_box = new SignInAndSignUp()
        this.mainApp = new Main()
        this.boxStyle = ['w-full', 'h-screen']
        this.backgroundStyle = ['fixed', 'bg-slate-900', 'w-36', 'h-36' , 'top-0', 'left-0']
        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.backgroundStyle,this.background)
    }
    render(){
        AddChild(this.box, this.signIn_SignUp_box.render())
        AddChild(this.box, this.background)
        return this.box
    }
}

export default App
