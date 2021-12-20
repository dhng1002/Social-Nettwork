import { AddChild, Event, New, RemoveEvent, tailwindAdd, tailwindRemove } from "../../../../Javascript/tool";

class Avatar {
    constructor(){
        this.box = New('div')
        this.avatar = New('img')
        this.title = New('div')
        this.firstTitle = New('p')
        this.secondTitle = New('p')

        this.firstTitle.textContent = 'Đào Duy Hưng'
        this.secondTitle.textContent = 'daoduyhung0000@gmail.com'
        this.firstTitle.title = this.firstTitle.textContent
        this.secondTitle.title = this.secondTitle.textContent

        this.boxStyle = ['w-full', 'h-16', 'shadow-[0_10px_50px_rgba(230,230,230,0.5)]', 'rounded' , 'flex', 'flex-row', 'items-center', 'cursor-pointer']
        this.avatarStyle = ['w-12', 'h-12', 'border', 'mx-4', 'grow-0', 'shrink-0']
        this.firstTitleStyle = ['font-semibold', 'w-40' , 'truncate', 'inline-block']
        this.secondTitleStyle = ['text-xs', 'text-slate-400', 'w-40' , 'truncate', 'tracking-widest']
        this.titleStyle = ['grow']

        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.avatarStyle, this.avatar)
        tailwindAdd(this.titleStyle,this.title)
        tailwindAdd(this.firstTitleStyle, this.firstTitle)
        tailwindAdd(this.secondTitleStyle, this.secondTitle)

        Event('mouseenter', this.box, this.mouseEnterHandle.bind(this))
        Event('mouseleave', this.box, this.mouseOutHandle.bind(this))
    }
    mouseEnterHandle(e){
        tailwindAdd(['bg-slate-300'], e.target)
    }
    mouseOutHandle(e){
        tailwindRemove(['bg-slate-300'], e.target)
    }
    render(){
        AddChild(this.box, this.avatar)
        AddChild(this.title, this.firstTitle)
        AddChild(this.title, this.secondTitle)
        AddChild(this.box, this.title)
        return this.box
    }
}

export default Avatar