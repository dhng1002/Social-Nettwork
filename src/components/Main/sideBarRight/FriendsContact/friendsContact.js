import { tailwindAdd, AddChild, New } from "../../../../Javascript/tool";
import ContactList from "./ContactList";
class FriendsContact{
     constructor(){
          this.box = New('div')

          this.contactTitleBox = New('div')
          this.contactTitle = New('p')
          this.countNotifications = New('p')

          this.contactBox = New('div')
          this.contactList = new ContactList()

          this.contactTitle.textContent = "CONTACT"
          this.countNotifications.textContent = "2"
          
          this.boxStyle = ["w-full","h-80"]

          this.contactTitleBoxStyle = ["w-full","flex","justify-between"]
          this.contactTitleStyle = ['text-gray-400']
          this.countNotificationsStyle = ['rounded-full', 'bg-indigo-700', 'text-white', 'w-6', 'h-6', 'text-center']
          this.contactBoxStyle = ["w-full","mt-6"]
          
          
          tailwindAdd(this.boxStyle, this.box)
          tailwindAdd(this.contactTitleBoxStyle, this.contactTitleBox)
          tailwindAdd(this.contactTitleStyle, this.contactTitle)
          tailwindAdd(this.countNotificationsStyle, this.countNotifications)
          tailwindAdd(this.contactBoxStyle,this.contactBox)
          
     }
     render(){
          AddChild(this.box, this.contactTitleBox)
          AddChild(this.contactTitleBox,this.contactTitle)
          AddChild(this.contactTitleBox,this.countNotifications)

          AddChild(this.box,this.contactBox)
          AddChild(this.contactBox,this.contactList.render())

          return this.box
     }
}

export default FriendsContact