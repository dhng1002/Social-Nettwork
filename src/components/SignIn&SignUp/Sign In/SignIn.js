import { BaseButton, BaseInput, BaseLabel } from "../../../Javascript/base"
import { AddChild, New, tailwindAdd, Event, tailwindRemove, Element } from "../../../Javascript/tool"
import { boxStyle, btnStyle, firstTitleStyle, inputStyle, labelStyle, linkStyle, secondTitleStyle, thirdTitleStyle, childStyle , inputAlertStyle} from "../SignInAndSignUpStyle"
import {brigde} from "../Background/BackgroundBox"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import currentApp from "../../..";
import App from "../../../app";

class SignIn {
    constructor(callback, notification){
        this.box = New('div')
        this.child = New('div')
        this.firstTitle = New('p')
        this.secondTitle = New('h1')
        this.thirdTitle = New('p')
        this.link = New('a')
        this.emailLabel = new BaseLabel('email', 'E-Mail')
        this.passWordLabel = new BaseLabel('password', 'Password')
        this.emailInput = new BaseInput('text', 'email', 'email')
        this.passWordInput = new BaseInput('password', 'password', 'password')
        this.btn = new BaseButton('SIGN IN')
        this.emailAlert = New('p')
        this.passwordAlert = New('p')
        this.isClick = false
        this.notification = notification

        this.thirdTitle.textContent = `Don't have an account? `
        this.link.textContent = 'Sign Up.'
        this.firstTitle.textContent = 'START YOUR JOURNEY'
        this.secondTitle.textContent = 'Sign In to Creppo'

        this.callback = callback
        this.childStyle = childStyle
        this.boxStyle = boxStyle
        this.firstTitleStyle = firstTitleStyle
        this.secondTitleStyle = secondTitleStyle
        this.thirdTitleStyle = thirdTitleStyle
        this.linkStyle = linkStyle
        this.labelStyle = labelStyle
        this.inputStyle = inputStyle
        this.btnStyle = btnStyle
        this.alertStyle = inputAlertStyle

        tailwindAdd([...this.childStyle, 'right-0'], this.child)
        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.firstTitleStyle, this.firstTitle)
        tailwindAdd(this.secondTitleStyle, this.secondTitle)
        tailwindAdd(this.thirdTitleStyle, this.thirdTitle)
        tailwindAdd(this.linkStyle, this.link)
        tailwindAdd(this.alertStyle, this.emailAlert)
        tailwindAdd(this.alertStyle, this.passwordAlert)
        this.emailLabel.tailWindAdd(this.labelStyle)
        this.passWordLabel.tailWindAdd(this.labelStyle)
        this.emailInput.tailWindAdd(this.inputStyle)
        this.passWordInput.tailWindAdd(this.inputStyle)
        this.btn.tailWindAdd(this.btnStyle)
        AddChild(this.thirdTitle, this.link)
        Event('click', this.link, this.handleLink.bind(this))
        this.emailInput.Event('focus', this.handleFocus.bind(this))
        this.passWordInput.Event('focus', this.handleFocus.bind(this))
        this.btn.Event('click', this.signInHandle.bind(this))

    }
    handleLink(e){
        let startImage = 0
        let startPosition = 0
        this.callback(this.isClick)
        let run = function (){
            startImage += 1
            startPosition += 1.5
            brigde.currentValue.BackgroundBox.style.left = `${startImage}%`
            brigde.currentValue.BackgroundBox.style.backgroundPosition = `${startPosition}%`
            if(startImage <= 100 - (7 * 100 / 12) ){
                requestAnimationFrame(run)
            } else{
                startImage = 100 - (7 * 100 / 12)
                cancelAnimationFrame(run)
            }
        }
        run()
    }
    signInHandle(){
        signInWithEmailAndPassword(getAuth(), this.emailInput.input.value.trim(), this.passWordInput.input.value.trim())
        .then((userCredential) => {
            const user = userCredential.user;
            if(user.emailVerified === false){
                console.log(user)
                this.notification.title.textContent = `Hi ${user.displayName}! Please verify your account to log in `
                tailwindRemove(['hidden'], this.notification.box)
            }else{
                Element('#root').innerHTML = ''
                AddChild( Element('#root'), new App().render("Main"))
                localStorage.setItem('uid', user.uid)
            }
        })
        .catch((error) => {
        const errorCode = error.code;
            console.log(errorCode)
            if(errorCode === 'auth/internal-error' || errorCode === 'auth/wrong-password'){
                this.passwordAlert.textContent = 'Your password is wrong'
            }else if(errorCode === 'auth/invalid-email' ||  errorCode === 'auth/user-not-found' ){
                this.emailAlert.textContent = 'The account you entered does not exist'
            }
        });
    }
    handleFocus(e){
        this.emailAlert.textContent=''
        this.passwordAlert.textContent=''
        e.target.value = ''
    }
    render(){
        AddChild(this.child, this.firstTitle)
        AddChild(this.child, this.secondTitle)
        AddChild(this.child, this.thirdTitle)
        AddChild(this.child, this.emailLabel.render())
        AddChild(this.child, this.emailInput.render())
        AddChild(this.child, this.emailAlert)
        AddChild(this.child, this.passWordLabel.render())
        AddChild(this.child, this.passWordInput.render())
        AddChild(this.child, this.passwordAlert)
        AddChild(this.child, this.btn.render())
        AddChild(this.box, this.child)
        return this.box
    }
}

export default SignIn



