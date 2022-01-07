import Brigde from "../../Javascript/Brigde";
import { AddChild, New, tailwindAdd } from "../../Javascript/tool";
import Header from "./header/header";
import MainContent from "./mainContent/mainContent";
import newAccountNotification from "./newAccountNotification/newAccountNotification";
import SideBarLeft from "./sideBarLeft/sideBarLeft";
import SideBarRight from "./sideBarRight/sideBarRight";
const brigde = new Brigde
class Main {
    constructor(){
        this.box = New('div')
        this.header = new Header();
        this.sideBarLeft = new SideBarLeft();
        this.sideBarRight = new SideBarRight();
        this.mainContent = new MainContent();
        this.newAccountNotification = new newAccountNotification()
        this.boxStyle = ['w-full', 'flex', 'flex-row','bg-slate-100']
        
        tailwindAdd(this.boxStyle, this.box)
        brigde.current({
            box: this.box,
            header: this.header.render(),
            notfication: this.newAccountNotification.render()
        })
    }
    render(){
        AddChild(this.box, this.newAccountNotification.render())
        AddChild(this.box, this.header.render())
        AddChild(this.box, this.sideBarLeft.render())
        AddChild(this.box, this.mainContent.render())
        AddChild(this.box, this.sideBarRight.render())
        return this.box
    }
}

export {brigde}
export default Main