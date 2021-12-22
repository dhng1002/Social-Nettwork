import { AddChild, New, SetAtt, tailwindAdd } from "../../Javascript/tool";
import SignUp from "./Sign UP/SignUp";
import SignIn from "./Sign In/SignIn";
import Background from "./Background/BackgroundBox"
class SignInAndSignUp {
    constructor(){
        this.box = New('div')
        this.child = New('div')
        this.background = new Background()
        this.signUp = new SignUp()
        this.signIn = new SignIn()
        this.boxStyle = ['lg:w-960', 'relative', 'inset-1/2', '-translate-y-1/2', '-translate-x-1/2','z-10','bg-white','rounded-3xl', 'overflow-hidden'] 
        this.childStyle = [ 'my-2', 'flex', 'flex-row','justify-between', 'h-576']
       
        
       
        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.childStyle, this.child)
        AddChild(this.child, this.signUp.render())
        AddChild(this.child,this.signIn.render())
        AddChild(this.box,this.background.render())
        
    }
    render(){
        AddChild(this.box, this.child)
        
        
        return this.box
    }
}


export default SignInAndSignUp