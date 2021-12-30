import { AddChild, New, tailwindAdd } from "../../../Javascript/tool";

class MainContent {
    constructor(){
        this.box = New('div')
        this.box.textContent = 'sss'
        this.boxStyle = ['grow', 'shrink', 'h-128', 'mt-24', 'inline-block', 'bg-white']
        tailwindAdd(this.boxStyle, this.box)
    }
    render(){
        return this.box
    }
}

export default MainContent