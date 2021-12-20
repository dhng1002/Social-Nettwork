import { AddChild, New, tailwindAdd } from "../../Javascript/tool";
import Header from "./header/header";
import MainContent from "./mainContent/mainContent";
import SideBarLeft from "./sideBarLeft/sideBarLeft";
import SideBarRight from "./sideBarRight/sideBarRight";

class Main {
    constructor(){
        this.box = New('div')
        this.header = new Header();
        this.sideBarLeft = new SideBarLeft();
        this.sideBarRight = new SideBarRight();
        this.mainContent = new MainContent();

        this.boxStyle = ['w-full', 'flex', 'flex-row']
        
        tailwindAdd(this.boxStyle, this.box)
    }
    render(){
        AddChild(this.box, this.header.render())
        AddChild(this.box, this.sideBarLeft.render())
        AddChild(this.box, this.mainContent.render())
        AddChild(this.box, this.sideBarRight.render())
        return this.box
    }
}

export default Main