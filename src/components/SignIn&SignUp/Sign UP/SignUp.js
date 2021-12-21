import{BaseInput , BaseLabel, BaseButton} from "../../../Javascript/base"
import { New , AddChild} from "../../../Javascript/tool"

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
          this.link.textContent = "SIGN IN ";

          this.usernameLabel = new BaseLabel("username","UserName");
          this.emailLabel = new BaseLabel("email-signUp","Email-signUp");
          this.passwordLabel = new BaseLabel("password-signUp","Password-signUp");  

          this.username_icon = New ('div')
          this.usernameInput = new BaseInput("text","username","username");
          this.emailInput = new BaseInput("text","email-signUp","email-signUp");
          this.passwordInput = new BaseInput("text","password-signUp","password-signUp");     

          this.btnSignUp = new BaseButton("SIGN UP");

          AddChild(this.thirdline , this.link);
          
      }
      render(){
          AddChild(this.box, this.fistline);
          AddChild(this.box, this.firsttitle);
          AddChild(this.box, this.thirdline);
          AddChild(this.box, this.link);
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