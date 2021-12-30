import 'tailwindcss/tailwind.css'
import { AddChild, Element } from './Javascript/tool'
import App from './app'
import "./Javascript/router"
let currentApp = new App().render("SignInAndSignUp");
(()=>{
    AddChild(Element('#root'), currentApp)
})()
export default currentApp