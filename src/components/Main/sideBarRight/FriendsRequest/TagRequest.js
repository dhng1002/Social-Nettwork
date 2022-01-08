import { BaseButton } from "../../../../Javascript/base";
import { AddChild, New, tailwindAdd } from "../../../../Javascript/tool";

class TagRequest{
    constructor(name){
        this.box = New('div')
        this.boxProfile = New('div')
        this.avatar = New('div')
        this.title = New('p')
        this.boxBtn = New('div')
        this.title.textContent = `${name} wants to add you to friends`
        this.AcceptBtn = new BaseButton('Accept')
        this.Decline = new BaseButton('Decline')
        this.avatarStyle = ['w-10', 'h-10']
        tailwindAdd(this.avatarStyle, this.avatar)
    }
    AvatarSize(value){
        this.avatar.style.backgroundSize = value
    }
    AvatarPosition(value){
        this.avatar.style.backgroundPosition = value
    }
    AvatarUrl(value){
        this.avatar.style.backgroundImage = value
    }
    AcceptEvent(value){
        this.AcceptBtn.Event('click', value)
    }
    DeclineEvent(value){
        this.Decline.Event('click', value)
    }
    render(){
        AddChild(this.box, this.boxProfile)
        AddChild(this.box, this.boxBtn)
        AddChild(this.boxProfile, this.avatar)
        AddChild(this.boxProfile, this.title)
        AddChild(this.boxBtn, this.AcceptBtn.render())
        AddChild(this.boxBtn, this.Decline.render())
        return this.box
    }
}

export default TagRequest