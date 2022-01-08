import { BaseButton } from "../../../../Javascript/base";
import { AddChild, New, tailwindAdd } from "../../../../Javascript/tool";

class TagRecommend{
    constructor(name){
        this.box = New('div')
        this.boxProfile = New('div')
        this.avatar = New('div')
        this.title = New('p')
        this.boxBtn = New('div')
        this.title.textContent = `Maybe you know ${name}`
        this.AddFriendBtn = new BaseButton('Add Friend')
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
    AddFriendEvent(value){
        this.AddFriendBtn.Event('click', value)
    }
    render(){
        AddChild(this.box, this.boxProfile)
        AddChild(this.box, this.boxBtn)
        AddChild(this.boxProfile, this.avatar)
        AddChild(this.boxProfile, this.title)
        AddChild(this.boxBtn, this.AddFriendBtn.render())
        return this.box
    }
}

export default TagRecommend