import { AddChild, New, tailwindAdd } from "../../../Javascript/tool";

class SideBarRight {
    constructor(){
        this.box = New('div')
        this.content = New('div')

        this.boxStyle = ['grow-0','shrink-0', 'basis-72', 'inline-block', 'mt-24']
        this.contentStyle = ['w-72', 'pr-4', 'fixed', 'right-0' ,'z-10']

        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.contentStyle, this.content)
    }
    render(){
        AddChild(this.box, this.content)
        return this.box
    }
}

export default SideBarRight