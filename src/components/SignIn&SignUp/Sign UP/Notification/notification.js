import { sendEmailVerification } from "firebase/auth";
import { BaseButton, BaseInput } from "../../../../Javascript/base";
import { auth } from "../../../../Javascript/firebase";
import { AddChild, New, tailwindAdd, tailwindRemove } from "../../../../Javascript/tool";

class Notification {
    constructor(){
        this.box = New('div')
        this.title = New('h1')
        this.sendBtn = new BaseButton('Send Email')
        this.closeBtn = new BaseButton('CLOSE')
        this.boxStyle = ['absolute', 'w-full', 'h-full', 'bg-indigo-700', 'top-0', 'left-0' ,'z-20','hidden', 'text-center','flex', 'flex-col', 'justify-center','items-center','text-2xl', 'text-white'],
        this.titleStyle = ['px-10','font-bold']
        this.isClick = false
        this.sendEmail = this.sendEmail.bind(this)
        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.titleStyle, this.title)
        this.sendBtn.tailWindAdd(['bg-teal-400', 'rounded','w-32', 'h-12', 'mt-6'])
        this.closeBtn.tailWindAdd(['absolute', 'right-4', 'top-4', 'bg-rose-400', 'p-2', 'rounded-lg'])

        this.sendBtn.Event('click', this.sendEmail)
        this.closeBtn.Event('click', this.closeNotification.bind(this))
    }
    sendEmail(){
        if(this.isClick === false){
            this.isClick = true
            sendEmailVerification(auth.currentUser)
            .then(()=>{
            let start = 60
            let timeToResend = setInterval(() => {
            start = start - 1
            this.sendBtn.button.textContent = start
            if(start <= 0){
                clearInterval(timeToResend)
                this.sendBtn.button.textContent = 'Send Email'
                this.isClick = false
            }
            }, 1000);
        })
        }
    }
    closeNotification(){
        tailwindAdd(['hidden'], this.box)
    }
    render(){
        AddChild(this.box,this.title)
        AddChild(this.box,this.sendBtn.render())
        AddChild(this.box,this.closeBtn.render())
        return this.box
    }
}

export default Notification