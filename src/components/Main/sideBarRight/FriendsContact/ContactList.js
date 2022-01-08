import { tailwindAdd, AddChild, New } from "../../../../Javascript/tool";

class ContactList{
     constructor(name){
          this.avatarBox = New('div')
          this.avatar = New('div')
          this.avatarDot = New('div')
          this.userName = New('div')
          this.avatarNotification = New('p')

          this.userName.innerHTML = `<p>${name}</p>`
        
          this.avatarBoxStyle = ["w-full","flex","justify-between","items-center","hover:bg-gray-300","hover:rounded-lg"]
          this.avatarStyle = ['w-12', 'h-12', 'grow-0', 'shrink-0', 'rounded-lg','bg-indigo-700',"relative"]
          this.avatarDotStyle = ["bg-green-500","rounded-full","h-3","w-3","right-0","bottom-0","absolute","translate-x-1/4","translate-y-1/4"]
          this.userNameStyle = ["font-bold"]
          this.avatarNotificationStyle = ['rounded-full', 'bg-red-600', 'text-white', 'w-6', 'h-6', 'text-center']
          
          tailwindAdd(this.avatarBoxStyle,this.avatarBox)
          tailwindAdd(this.avatarStyle, this.avatar)
          tailwindAdd(this.avatarDotStyle, this.avatarDot)
          tailwindAdd(this.userNameStyle, this.userName)
          tailwindAdd(this.avatarNotificationStyle, this.avatarNotification)
          

     }
     render(){
         
          AddChild(this.avatarBox,this.avatar)
          AddChild(this.avatarBox,this.userName)
          AddChild(this.avatar,this.avatarDot)
          AddChild(this.avatarBox,this.avatarNotification)

          
          return this.avatarBox
     }
}

export default ContactList