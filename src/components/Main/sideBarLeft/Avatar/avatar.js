import { data } from "autoprefixer";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { auth } from "../../../../Javascript/firebase";
import { AddChild, Event, New, RemoveEvent, tailwindAdd, tailwindRemove } from "../../../../Javascript/tool";
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
        onAuthStateChanged(this.auth, (user)=>{
            if(user){
                console.log(user.uid)
                onValue(ref(db, 'mail and name/' + user.uid), snapshot=>{
                    const data = snapshot.val()
                    this.firstTitle.textContent = data.name
                    this.secondTitle.textContent = data.mail
                    this.firstTitle.title = this.firstTitle.textContent
                    this.secondTitle.title = this.secondTitle.textContent
                })
                onValue(ref(db, 'avatar/' + user.uid), snapshot=>{
                    let size
                    let position
                    const data = snapshot.val()
                    console.log(data)
                    if(data.size === 'initial' || data.size === 'cover'){
                        this.avatar.style.backgroundSize = `cover`
                    }else{
                        size = data.size.split(' ')
                        this.avatar.style.backgroundSize = `${size[0].replace('px','') * this.avatar.clientWidth / 208}px ${size[1].replace('px','') * this.avatar.clientWidth / 208}px`
                    }
                    console.log(data.position)
                    if(data.position === '' || data.position === 'initial'){
                        position = data.position.split(' ')
                        this.avatar.style.backgroundPosition = `100% auto`
                    }else{
                        this.avatar.style.backgroundPosition = `${position[0].replace('px','') * this.avatar.clientWidth / 208}px ${position[1].replace('px','') * this.avatar.clientWidth / 208}px`
                    }
                    this.avatar.style.backgroundImage = `url(${data.url})`
                    
                    
                })
            }
        })

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