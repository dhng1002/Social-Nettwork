import { data } from "autoprefixer";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { auth } from "../../../../Javascript/firebase";
import { AddChild, Event, New, RemoveEvent, tailwindAdd, tailwindRemove } from "../../../../Javascript/tool";
import { brigde } from "../../main";
import Profile from "../../../Profile/Profile";
const db = getDatabase()
class Avatar {
    constructor(){
        this.box = New('div')
        this.avatar = New('img')
        this.title = New('div')
        this.firstTitle = New('p')
        this.secondTitle = New('p')
        this.auth = auth
        
        this.boxStyle = ['w-full', 'h-16', 'shadow-[0_10px_50px_rgba(230,230,230,0.5)]', 'rounded' , 'flex', 'flex-row', 'items-center', 'cursor-pointer', 'bg-white']
        this.avatarStyle = ['w-12', 'h-12', 'mx-4', 'grow-0', 'shrink-0', 'rounded-md']
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
        Event('click', this.box, this.clickHandle.bind(this))
    }
    mouseEnterHandle(e){
        tailwindRemove(['bg-white'], e.target)
        tailwindAdd(['bg-slate-300'], e.target)
    }
    mouseOutHandle(e){
        tailwindAdd(['bg-white'], e.target)
        tailwindRemove(['bg-slate-300'], e.target)
    }
    clickHandle(e){
        onAuthStateChanged(this.auth, user => {
            if(user){
                for(let index = 0; index < brigde.currentValue.box.children.length  ; index++){
                    if(brigde.currentValue.box.children[index] !== brigde.currentValue.header && brigde.currentValue.box.children[index] !== brigde.currentValue.notfication){
                        (brigde.currentValue.box.children[index].remove())
                        index = 0
                    }
                }
                AddChild(brigde.currentValue.box, new Profile().render(user.uid))
            }
        })
    }
    render(){
        onAuthStateChanged(this.auth, (user)=>{
            if(user){
                onValue(ref(db, 'mail and name/' + user.uid), snapshot=>{
                    const data = snapshot.val()
                    if(data !== null){
                        this.firstTitle.textContent = data.name
                        this.secondTitle.textContent = data.mail
                        this.firstTitle.title = this.firstTitle.textContent
                        this.secondTitle.title = this.secondTitle.textContent
                    }
                })
                onValue(ref(db, 'avatar/' + user.uid), snapshot=>{
                    let size
                    let position
                    const data = snapshot.val()
                    if (data !== null){
                    if(data.size === 'initial' || data.size === 'cover'){
                        this.avatar.style.backgroundSize = `cover`
                    }else{
                        size = data.size.split(' ')
                        this.avatar.style.backgroundSize = `${size[0].replace('px','') * this.avatar.clientWidth / 208}px ${size[1].replace('px','') * this.avatar.clientWidth / 208}px`
                    }
                    if(data.position === '' || data.position === 'initial'){

                        this.avatar.style.backgroundPosition = `100% auto`
                    }else{
                        position = data.position.split(' ')
                        this.avatar.style.backgroundPosition = `${position[0].replace('px','') * this.avatar.clientWidth / 208}px ${position[1].replace('px','') * this.avatar.clientWidth / 208}px`
                    }
                    this.avatar.style.backgroundImage = `url(${data.url})`
                    
                    }
                })
            }
        })
        AddChild(this.box, this.avatar)
        AddChild(this.title, this.firstTitle)
        AddChild(this.title, this.secondTitle)
        AddChild(this.box, this.title)
        return this.box
    }
}

export default Avatar