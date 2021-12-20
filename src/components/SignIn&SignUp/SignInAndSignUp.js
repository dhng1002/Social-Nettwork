import { AddChild, New, SetAtt, tailwindAdd } from "../../Javascript/tool";
import SignIn from "./Sign In/SignIn";


class SignInAndSignUp {
    constructor(){
        this.box = New('div')
        this.child = New('div')
        this.signIn = new SignIn()
        this.boxStyle = ['w-4/5', 'h-96', 'border', 'border-black', 'relative', 'inset-1/2', '-translate-y-1/2', '-translate-x-1/2'] 
        this.childStyle = ['mx-4', 'my-2']

        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.childStyle, this.child)
        AddChild(this.child,this.signIn.render())
    }
    render(){
        AddChild(this.box, this.child)
        return this.box
    }
}

export default SignInAndSignUp