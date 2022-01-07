import 'tailwindcss/tailwind.css'
import { AddChild, Element, tailwindAdd } from './Javascript/tool'
import App from './app'

let currentApp = new App().render("SignInAndSignUp");
(()=>{
    AddChild(Element('#root'), currentApp)
})()
export default currentApp