import Main from "./components/Main/main";
import { AddChild, New, tailwindAdd } from "./Javascript/tool";
import SignInAndSignUp from "./components/SignIn&SignUp/SignInAndSignUp";
import Background from "./asset/image/background-SignIn&SignUp.jpg"
class App {
    constructor(){
        this.box = New('div')
        this.background = New('div')
        this.signIn_SignUp_box = new SignInAndSignUp()
        this.mainApp = new Main()
        this.boxStyle = ['w-full', 'h-screen']
        this.backgroundStyle = ['fixed', 'w-full', 'h-full' , 'top-0', 'left-0','bg-cover']
        this.background.style.background = `url(${Background})`
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
