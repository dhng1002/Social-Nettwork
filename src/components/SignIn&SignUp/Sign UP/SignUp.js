import{BaseInput , BaseLabel, BaseButton} from "../../../Javascript/base"
import { New , AddChild,tailwindAdd, Event, SetAtt, tailwindRemove} from "../../../Javascript/tool"
import {boxStyle , firstTitleStyle, secondTitleStyle , thirdTitleStyle, linkStyle, labelStyle, inputStyle, btnStyle,inputAlertStyle, childStyle} from "../SignInAndSignUpStyle"
import {brigde} from "../Background/BackgroundBox"
import { auth } from "../../../Javascript/firebase"
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
class SignUp {
    constructor(callback, notification){
    this.box = New('div')
    this.child = New('div');
    this.fistline = New('h1');
    this.fistline.textContent = "REGISTER NOW";
    this.firsttitle = New('p');
    this.firsttitle.textContent = "Sign Up For Free";
    this.thirdline = New('p');
    this.thirdline.textContent ="Already have an account? ";
    this.notification = notification
    
    this.link = New('a');
    this.link.textContent = "Sign In.";
    this.usernameLabel = new BaseLabel("username","Username");
    this.emailLabel = new BaseLabel("email-signUp","Email");
    this.passwordLabel = new BaseLabel("password-signUp","Password");  
    
    this.username_icon = New ('div')
    this.usernameInput = new BaseInput("text","username","username");
    this.usernameAlert = New('p');
    this.emailInput = new BaseInput("text","email-signUp","email-signUp");
    this.emailAlert = New ('p');
    this.passwordInput = new BaseInput("password","password-signUp","password-signUp");     
    this.passwordAlert = New('p');
    this.btnSignUp = new BaseButton("SIGN UP");
    this.isClick = true

    
    this.boxStyle = boxStyle;
    this.childStyle = childStyle;
    this.firstLineStyle = firstTitleStyle;
    this.firstTitleStyle = secondTitleStyle;
    this.thirdLineStyle = thirdTitleStyle;
    this.linkStyle = linkStyle;
    this.labelStyle = labelStyle;
    this.inputStyle = inputStyle;
    this.btnStyle = btnStyle;
    this.inputAlertStyle = inputAlertStyle;
    
    this.callback = callback
    tailwindAdd(this.boxStyle, this.box)
    tailwindAdd(this.childStyle, this.child);
    tailwindAdd(this.firstLineStyle, this.fistline);
    tailwindAdd(this.firstTitleStyle, this.firsttitle);
    tailwindAdd(this.thirdLineStyle, this.thirdline);
    tailwindAdd(this.linkStyle, this.link);
    tailwindAdd(this.inputAlertStyle, this.usernameAlert);
    tailwindAdd(this.inputAlertStyle, this.emailAlert);
    tailwindAdd(this.inputAlertStyle,this.passwordAlert);
    
    
    this.usernameLabel.tailWindAdd(this.labelStyle);
    this.emailLabel.tailWindAdd(this.labelStyle);
    this.passwordLabel.tailWindAdd(this.labelStyle);
    
    this.usernameInput.tailWindAdd(this.inputStyle);
    this.emailInput.tailWindAdd(this.inputStyle);
    this.passwordInput.tailWindAdd(this.inputStyle);
    
    this.btnSignUp.tailWindAdd(this.btnStyle);
    
    
    AddChild(this.thirdline , this.link);
    Event('click', this.link, this.handleLink.bind(this) )
    this.btnSignUp.Event('click', this.handleSignUp.bind(this))
    this.emailInput.Event('focus', this.handleFocus.bind(this))
    this.usernameInput.Event('focus', this.handleFocus.bind(this))
    this.passwordInput.Event('focus', this.handleFocus.bind(this))
}
handleLink(e){
        let startImage = 42
        let startPosition = 65
        this.callback(this.isClick)
        let run = function (){
            startImage -= 1
            startPosition -= 1.5
            brigde.currentValue.BackgroundBox.style.left = `${startImage}%`
            brigde.currentValue.BackgroundBox.style.backgroundPosition = `${startPosition}%`
            if(startImage >=0 ){
                requestAnimationFrame(run)
            } else{
                startImage = 0
                cancelAnimationFrame(run)
            }
        }
        run()
    }
    handleFocus(e){
        this.usernameAlert.textContent=''
        this.emailAlert.textContent=''
        this.passwordAlert.textContent=''
        e.target.value = ''
    }
    handleSignUp(){
        const regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        const regexName = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/

        let nameResult = this.usernameInput.input.value.match(regexName) ? 
        true : this.usernameAlert.textContent = 'Your username must be at least 8 characters'
        let mailResult = this.emailInput.input.value.match(regexMail) ?
        true : this.emailAlert.textContent = 'Your email account is not valid'
        let passwordResult = this.passwordInput.input.value.match(regexPassword) ?
        true : this.passwordAlert.textContent = 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
        SetAtt(this.usernameAlert, 'title', this.usernameAlert.textContent)
        SetAtt(this.emailAlert, 'title', this.emailAlert.textContent)
        SetAtt(this.passwordAlert, 'title', this.passwordAlert.textContent)
        if(nameResult === true && mailResult === true && passwordResult === true){
            createUserWithEmailAndPassword(auth, this.emailInput.input.value.trim(), this.passwordInput.input.value.trim())
            .then(userCredential => {
                updateProfile(auth.currentUser, {displayName: this.usernameInput.input.value})
                .then(() =>{
                    this.notification.title.textContent= `Hi ${auth.currentUser.displayName}! Please click the button below and check your email to verify your account`
                    tailwindRemove(['hidden'], this.notification.box)
                })
                .catch(()=>{
                    this.notification.title.textContent `Hi! Please click the button below and check your email to verify your account`
                    tailwindRemove(['hidden'], this.notification.box)
                })
                set(ref(getDatabase(), `New User/` + auth.currentUser.uid),{
                    haveSignIn: false
                })
                
            })
            .catch(err => {
                const errCode = err.code
                errCode === 'auth/email-already-in-use' ? this.emailAlert.textContent = 'Email is already in use' : null
            })
        }
    }

    render(){
    AddChild(this.child, this.fistline);
    AddChild(this.child, this.firsttitle);
    AddChild(this.child, this.thirdline);
    AddChild(this.thirdline, this.link);
    AddChild(this.child, this.usernameLabel.render());
    AddChild(this.child, this.usernameInput.render());
    AddChild(this.child, this.usernameAlert);
    AddChild(this.child, this.emailLabel.render());
    AddChild(this.child, this.emailInput.render());
    AddChild(this.child, this.emailAlert);
    AddChild(this.child, this.passwordLabel.render());
    AddChild(this.child, this.passwordInput.render());
    AddChild(this.child, this.passwordAlert);
    AddChild(this.child, this.btnSignUp.render());
    AddChild(this.box, this.child)
    return this.box
}}
    export default SignUp