import{BaseInput , BaseLabel, BaseButton} from "../../../Javascript/base"
import { New , AddChild,tailwindAdd} from "../../../Javascript/tool"
import {boxStyle , firstTitleStyle, secondTitleStyle , thirdTitleStyle, linkStyle, labelStyle, inputStyle, btnStyle} from "../SignInAndSignUpStyle"


class SignUp {
     constructor(){
          this.box = New('div');
          this.fistline = New('h1');
          this.fistline.textContent = "REGISTER NOW";
          this.firsttitle = New('p');
          this.firsttitle.textContent = "SIGN UP FOR FREE";
          this.thirdline = New('p');
          this.thirdline.textContent ="Already have an account?";

          this.link = New('a');
          this.link.textContent = "Sign In ";

          this.usernameLabel = new BaseLabel("username","UserName");
          this.emailLabel = new BaseLabel("email-signUp","Email-signUp");
          this.passwordLabel = new BaseLabel("password-signUp","Password-signUp");  

          this.username_icon = New ('div')
          this.usernameInput = new BaseInput("text","username","username");
          this.emailInput = new BaseInput("text","email-signUp","email-signUp");
          this.passwordInput = new BaseInput("text","password-signUp","password-signUp");     

          this.btnSignUp = new BaseButton("SIGN UP");

          this.boxStyle = boxStyle;
          this.firstLineStyle = firstTitleStyle;
          this.firstTitleStyle = secondTitleStyle;
          this.thirdLineStyle = thirdTitleStyle;
          this.linkStyle = linkStyle;
          this.labelStyle = labelStyle;
          this.inputStyle = inputStyle;
          this.btnStyle = btnStyle;

          tailwindAdd(this.boxStyle, this.box);
          tailwindAdd(this.firstLineStyle, this.fistline);
          tailwindAdd(this.firstTitleStyle, this.firsttitle);
          tailwindAdd(this.thirdLineStyle, this.thirdline);
          tailwindAdd(this.linkStyle, this.link);
          
          this.usernameLabel.tailWindAdd(this.labelStyle);
          this.emailLabel.tailWindAdd(this.labelStyle);
          this.passwordLabel.tailWindAdd(this.labelStyle);

          this.usernameInput.tailWindAdd(this.inputStyle);
          this.emailInput.tailWindAdd(this.inputStyle);
          this.passwordInput.tailWindAdd(this.inputStyle);

          this.btnSignUp.tailWindAdd(this.btnStyle);


          AddChild(this.thirdline , this.link);
          
          
      }
      render(){
          AddChild(this.box, this.fistline);
          AddChild(this.box, this.firsttitle);
          AddChild(this.box, this.thirdline);
          AddChild(this.thirdline, this.link);
          AddChild(this.box, this.usernameLabel.render());
          AddChild(this.box, this.usernameInput.render());
          AddChild(this.box, this.emailLabel.render());
          AddChild(this.box, this.emailInput.render());
          AddChild(this.box, this.passwordLabel.render());
          AddChild(this.box, this.passwordInput.render());
          AddChild(this.box, this.btnSignUp.render());

          return this.box
      }}
      export default SignUp