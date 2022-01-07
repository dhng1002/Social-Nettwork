import { tailwindAdd, AddChild, New } from "../../../../Javascript/tool";
import {BaseButton} from "../../../../Javascript/base"

class FriendsRequest{
     constructor(){
          this.box = New('div');
          
          this.request = New('div');
          this.requestTitle = New('p');
          this.countNotifications = New('p');

          this.content = New('div');
          this.avatar = New('div');
          this.requestText = New('p');

          this.buttonBox = New('div');
          this.acceptButton = new BaseButton("Accept");
          this.declineButton = new BaseButton("Decline");

          this.requestTitle.textContent = "REQUESTS"
          this.countNotifications.textContent = "2"
          this.requestText.textContent = "... wants to add you to friends"


          this.boxStyle =["w-full","h-40"]
          this.requestStyle =["w-full","flex","justify-between"]
          // this.countNotificationsStyle =[]
          this.contentStyle =["w-full"]
          this.avatarStyle =['w-12', 'h-12', 'mx-4', 'grow-0', 'shrink-0', 'rounded-md']
          this.buttonBoxStyle=["w-full"]
          this.acceptButtonStyle =["rounded-lg-[20px]","bg-violet-900","font-bold","text-base","tracking-widest","no-underline","py-2.5","px-10" ]
          this.declineButtonStyle =["rounded-lg-[20px]","font-bold","text-base","tracking-widest","no-underline","py-2.5","px-10"]

          tailwindAdd(this.boxStyle, this.box)
          tailwindAdd(this.contentStyle, this.content)
          tailwindAdd(this.requestStyle, this.request)
          // tailwindAdd(this.countNotificationsStyle, this.countNotifications)
          tailwindAdd(this.avatarStyle, this.avatar)
          tailwindAdd(this.buttonBoxStyle, this.buttonBox)
          tailwindAdd(this.acceptButtonStyle, this.acceptButton)
          tailwindAdd(this.declineButtonStyle, this.declineButton)
     }
     render() {
          AddChild(this.box , this.content)
          AddChild(this.content , this.avatar)
          AddChild(this.content , this.requestText)

          AddChild(this.box , this.request)
          AddChild(this.request , this.requestTitle)
          AddChild(this.request , this.countNotifications)

          AddChild(this.content, this.buttonBox)
          AddChild(this.buttonBox, this.acceptButton)
          AddChild(this.buttonBox, this.declineButton)

          return this.box;
     }

}
export default FriendsRequest