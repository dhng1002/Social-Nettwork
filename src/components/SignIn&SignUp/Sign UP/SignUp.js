import{BaseInput , BaseLabel, BaseButton} from "../../../Javascript/base"
import { New , AddChild,tailwindAdd, Event} from "../../../Javascript/tool"
import {boxStyle , firstTitleStyle, secondTitleStyle , thirdTitleStyle, linkStyle, labelStyle, inputStyle, btnStyle,inputAlertStyle, childStyle} from "../SignInAndSignUpStyle"
import {brigde} from "../Background/BackgroundBox"

class SignUp {
     constructor(callback){
          this.box = New('div')
          this.child = New('div');
          this.fistline = New('h1');
          this.fistline.textContent = "REGISTER NOW";
          this.firsttitle = New('p');
          this.firsttitle.textContent = "Sign Up For Free";
          this.thirdline = New('p');
          this.thirdline.textContent ="Already have an account? ";

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
          this.passwordInput = new BaseInput("text","password-signUp","password-signUp");     
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