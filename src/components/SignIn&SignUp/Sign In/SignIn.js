import { BaseButton, BaseInput, BaseLabel } from "../../../Javascript/base"
import { AddChild, New } from "../../../Javascript/tool"

class SignIn {
    constructor(){
        this.box = New('div')
        this.firstTitle = New('p')
        this.secondTitle = New('h1')
        this.thirdTitle = New('p')
        this.link = New('a')
        this.emailLabel = new BaseLabel('email', 'E-Mail')
        this.passWordLabel = new BaseLabel('password', 'Password')
        this.emailInput = new BaseInput('text', 'email', 'email')
        this.passWordInput = new BaseInput('text', 'password', 'password')
        this.btn = new BaseButton('SIGN IN')

        this.thirdTitle.textContent = `Don't have an account? `
        this.link.textContent = 'Sign Up.'

        AddChild(this.thirdTitle, this.link)
    }
    render(){
        AddChild(this.box, this.firstTitle)
        AddChild(this.box, this.secondTitle)
        AddChild(this.box, this.thirdTitle)
        AddChild(this.box, this.emailLabel.render())
        AddChild(this.box, this.emailInput.render())
        AddChild(this.box, this.passWordLabel.render())
        AddChild(this.box, this.passWordInput.render())
        AddChild(this.box, this.btn.render())
        return this.box
    }
}

export default SignIn