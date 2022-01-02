import { AddChild, New, tailwindAdd } from "../../../Javascript/tool";

class MainContent {
    constructor(){
        this.box = New('div')
        this.boxStyle = ['grow', 'shrink', 'h-128', 'mt-20', 'inline-block', 'bg-white']
        tailwindAdd(this.boxStyle, this.box)
    }
    render(){
        return this.box
    }
}

export default MainContent