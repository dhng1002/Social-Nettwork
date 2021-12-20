import { AddChild, New, tailwindAdd } from "../../../Javascript/tool";
import Avatar from "./Avatar/avatar";
import ToolBar from "./toolBar/toolBar";
import Style from "./sideBarLeft.module.scss"
class SideBarLeft {
    constructor(){
        this.box = New('div')
        this.content = New('div')
        this.avatar = new Avatar()
        this.toolBar = new ToolBar()
        this.boxStyle = ['grow-0','shrink-0', 'basis-72','inline-block', 'mt-24']
        this.contentStyle = ['w-72', 'fixed', 'pl-4', Style.spacingSideBar , 'overflow-y-auto', 'z-10', Style.scrollSideBar]

        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.contentStyle, this.content)
    }
    render(){
        AddChild(this.box, this.content)
        AddChild(this.content, this.avatar.render())
        AddChild(this.content, this.toolBar.render())
        return this.box
    }
}

export default SideBarLeft