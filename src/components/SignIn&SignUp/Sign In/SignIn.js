import { BaseButton, BaseInput, BaseLabel } from "../../../Javascript/base"
import { AddChild, New, tailwindAdd } from "../../../Javascript/tool"
import { boxStyle, btnStyle, firstTitleStyle, inputStyle, labelStyle, linkStyle, secondTitleStyle, thirdTitleStyle } from "../SignInAndSignUpStyle"

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
        this.firstTitle.textContent = 'START YOUR JOURNEY'
        this.secondTitle.textContent = 'Sign In to Creppo'

        this.boxStyle = boxStyle
        this.firstTitleStyle = firstTitleStyle
        this.secondTitleStyle = secondTitleStyle
        this.thirdTitleStyle = thirdTitleStyle
        this.linkStyle = linkStyle
        this.labelStyle = labelStyle
        this.inputStyle = inputStyle
        this.btnStyle = btnStyle

        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.firstTitleStyle, this.firstTitle)
        tailwindAdd(this.secondTitleStyle, this.secondTitle)
        tailwindAdd(this.thirdTitleStyle, this.thirdTitle)
        tailwindAdd(this.linkStyle, this.link)
        this.emailLabel.tailWindAdd(this.labelStyle)
        this.passWordLabel.tailWindAdd(this.labelStyle)
        this.emailInput.tailWindAdd(this.inputStyle)
        this.passWordInput.tailWindAdd(this.inputStyle)
        this.btn.tailWindAdd(this.btnStyle)
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



