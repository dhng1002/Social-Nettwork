import 'tailwindcss/tailwind.css'
import { AddChild, Element } from './Javascript/tool'
import App from './app'

let currentApp = new App();
(()=>{
    AddChild(Element('#root'), currentApp.render())
})()
export default currentApp