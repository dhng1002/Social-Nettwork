import 'tailwindcss/tailwind.css'
import { AddChild, Element } from './Javascript/tool'
import App from './app'
import Login from './components/Log In/LogIn';
let currentApp = new App();
(()=>{
    AddChild(Element('#root'), currentApp.render())
})()
export default currentApp