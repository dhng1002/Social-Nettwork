import { AddChild, New, tailwindAdd } from "../../../../Javascript/tool";
import Save from "./save/save";
import Friends from "./friends/friends";
import Groups from "./groups/groups";
import Photos from "./Photos/photos";
import Profile from "./profile/profile";

class ToolBar {
    constructor(){
        this.box = New('div')
        this.profile = new Profile()
        this.friends = new Friends()
        this.photos = new Photos()
        this.groups = new Groups()
        this.saved = new Save()
        this.boxStyle = ['flex', 'flex-col', 'w-full', 'mt-6', 'shadow-[0_0_20px_rgba(230,230,230,0.5)]', 'rounded-lg', 'bg-white']

        tailwindAdd(this.boxStyle, this.box)
    }
    render(){
        AddChild(this.box, this.profile.render())
        AddChild(this.box, this.friends.render())
        AddChild(this.box, this.photos.render())
        AddChild(this.box, this.groups.render())
        AddChild(this.box, this.saved.render())
        return this.box
    }
}

export default ToolBar