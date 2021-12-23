import { AddChild, New, SetAtt, tailwindAdd, Event, tailwindRemove } from "../../Javascript/tool";
import SignUp from "./Sign UP/SignUp";
import SignIn from "./Sign In/SignIn";
import Background from "./Background/BackgroundBox"

class SignInAndSignUp {
    constructor(){
        this.box = New('div')
        this.child = New('div')
        this.background = new Background()
        this.signUp = new SignUp(this.checkSignUpClick.bind(this))
        this.signIn = new SignIn(this.checkSignInClick.bind(this))
        this.boxStyle = ['lg:w-960', 'md:w-800', 'relative', 'inset-1/2', '-translate-y-1/2', '-translate-x-1/2','z-10','bg-white','rounded-3xl', 'overflow-hidden'] 
        this.childStyle = [ 'my-2', 'flex', 'flex-row','justify-between', 'lg:h-576', 'md:h-450']
        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.childStyle, this.child)
        AddChild(this.child, this.signUp.render())
        AddChild(this.child,this.signIn.render())
        AddChild(this.box,this.background.render())
        
        Event('resize', window, this.handleResize.bind(this))
        if(window.innerWidth < 920){
            this.handleResize()
        }
    }
    checkSignInClick(value){
        this.signIn.isClick = true
        this.signUp.isClick = value
        if(window.innerWidth < 920){
            tailwindAdd(['hidden'], this.signIn.box)
            tailwindRemove(['hidden'], this.signUp.box)
        }
    }
    checkSignUpClick(value){
        this.signUp.isClick = true
        this.signIn.isClick = value
        if(window.innerWidth < 920){
            tailwindAdd(['hidden'], this.signUp.box)
            tailwindRemove(['hidden'], this.signIn.box)
        }
    }
    handleResize(e) {
        if(window.innerWidth < 920){
            tailwindAdd(['hidden'], this.background.box)
            tailwindAdd(['mx-6','w-fit'],this.signIn.child)
            tailwindAdd(['mx-6', 'w-fit'],this.signUp.child)
            tailwindAdd(['w-fit'], this.box)


            tailwindRemove(['lg:w-960', 'md:w-800'], this.box)
            tailwindRemove(['relative','basis-6/12'], this.signIn.box)
            tailwindRemove(['relative','basis-6/12'], this.signUp.box)
            tailwindRemove(['absolute'], this.signIn.child)
            tailwindRemove(['absolute'], this.signUp.child)
            if(this.signUp.isClick === true && this.signIn.isClick === false){
                tailwindAdd(['hidden'], this.signUp.box)  
            }else if(this.signUp.isClick === false && this.signIn.isClick === true){
                tailwindAdd(['hidden'], this.signIn.box)
            }
        }else{
            tailwindAdd(['lg:w-960', 'md:w-800'], this.box)
            tailwindAdd(['relative','basis-6/12'], this.signIn.box)
            tailwindAdd(['relative','basis-6/12'], this.signUp.box)
            tailwindAdd(['absolute'], this.signIn.child)
            tailwindAdd(['absolute'], this.signUp.child)
            tailwindRemove(['hidden'], this.signIn.box)
            tailwindRemove(['hidden'], this.signUp.box)
            tailwindRemove(['hidden'], this.background.box)

            tailwindRemove(['hidden'], this.background.box)
            tailwindRemove(['mx-6','w-fit'],this.signIn.child)
            tailwindRemove(['mx-6','w-fit'],this.signUp.child)
            tailwindRemove(['w-fit'],this.box)
        }
    }
    render(){
        AddChild(this.box, this.child)
        
        
        return this.box
    }
}


export default SignInAndSignUp