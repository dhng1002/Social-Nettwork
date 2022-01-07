import { tailwindAdd, AddChild, New } from "../../../../Javascript/tool";

class FriendsContact{
     constructor(){
          this.box = New('div')

          this.contactTitleBox = New('div')
          this.contactTitle = New('p')
          this.countNotifications = New('p')

          this.contactBox = New('div')
          this.avatarBox = New('div')
          this.avatar = New('div')
          this.avatarNotification = New('p')

          this.contactTitle.textContent = "CONTACT"
          this.countNotifications.textContent = "2"
          this.avatarNotification.textContent = "3"

          this.boxStyle = ["w-full","h-80"]
          this.contactTitleStyle = ["w-full","flex","justify-between"]
          // this.countNotificationsStyle = []
          this.contactBoxStyle = ["w-full"]
          this.avatarBoxStyle = ["w-full","flex","justify-between"]
          this.avatarStyle = ['w-12', 'h-12', 'mx-4', 'grow-0', 'shrink-0', 'rounded-md']
          // this.avatarNotificationStyle = []
          
          tailwindAdd(this.boxStyle, this.box)
          tailwindAdd(this.contactTitleStyle, this.contactTitle)
          // tailwindAdd(this.countNotificationsStyle, this.countNotifications)
          tailwindAdd(this.contactBoxStyle,this.contactBox)
          tailwindAdd(this.avatarBoxStyle,this.avatarBox)
          tailwindAdd(this.avatarStyle, this.avatar)
          

     }
     render(){
          AddChild(this.box, this.contactTitleBox)
          AddChild(this.contactTitleBox,this.contactTitle)
          AddChild(this.contactTitleBox,this.countNotifications)

          AddChild(this.box,this.contactBox)
          AddChild(this.contactBox,this.avatarBox)
          AddChild(this.contactBox,this.avatar)
          AddChild(this.contactBox,this.avatarNotification)

          
          return this.box
     }
}

export default FriendsContact