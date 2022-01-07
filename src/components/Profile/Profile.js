import { async } from "@firebase/util";
import { data } from "autoprefixer";

import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, push, ref, set, update } from "firebase/database";
import { list } from "firebase/storage";
import { BaseButton } from "../../Javascript/base";
import { auth } from "../../Javascript/firebase";
import { AddChild, Event, New, tailwindAdd } from "../../Javascript/tool";
import { brigde } from "../Main/main";
const db = getDatabase()
class Profile {
    constructor(){
        this.box = New('div')
        this.coverImage = New('div')
        this.information = New('div')
        this.avatar = New('div')
        this.userName = New('p')
        this.navBar = New('div')
        this.auth = auth
        this.eventOption = false
        this.eventAddFriend = false
        this.firstRequest = true
        this.boxStyle = ['mt-16', 'w-3/4', 'mx-auto']
        this.coverImageStyle = ['w-full', 'h-72', 'bg-slate-800', 'rounded-b-lg']
        this.avatarStyle = ['w-40', 'h-40', 'rounded-lg']
        this.informationStyle = ['flex', 'flex-col', 'items-center', 'relative', 'top-full', 'left-1/2', '-translate-y-1/2', '-translate-x-1/2']
        this.userNameStyle = ['pt-2', 'font-bold', 'text-2xl', 'tracking-wide']
        this.navBarStyle = ['my-32', 'flex', 'flex-row', 'items-center', 'justify-center']
        this.addFriendBtnStyle = ['bg-sky-400', 'px-4', 'py-2', 'font-bold', 'text-white', 'rounded-lg']
        this.acceptBtnStyle = ['bg-sky-400', 'px-4', 'py-2', 'font-bold', 'text-white', 'rounded-lg', 'mx-2'] 
        this.declineBtnStyle = ['bg-stone-500', 'px-4', 'py-2', 'font-bold', 'text-white', 'rounded-lg', 'mx-2']
        this.cancelRequestStyle = ['bg-sky-400', 'px-4', 'py-2', 'font-bold', 'text-white', 'rounded-lg']
        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.coverImageStyle, this.coverImage)
        tailwindAdd(this.avatarStyle, this.avatar)
        tailwindAdd(this.informationStyle, this.information)
        tailwindAdd(this.userNameStyle, this.userName)
        tailwindAdd(this.navBarStyle, this.navBar)
    }
    render(value){
        onValue(ref(db, 'mail and name/' + value), snapshot =>{
            this.userName.textContent = snapshot.val().name
        })
        onValue(ref(db, 'avatar/' + value), snapshot=>{
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
        function clearChild(element){
            for(let index = 0 ; index < element.children.length ;){
                element.children[index].remove()
            }
        }
        onAuthStateChanged(this.auth, user => {
            if(user){
                onValue(ref(db, 'Request/'+ user.uid),snapshot =>{
                    let addFriendBtn = new BaseButton('Add friend')
                    let acceptBtn = new BaseButton('Accept')
                    let declineBtn = new BaseButton('Decline')
                    let cancelRequest = new BaseButton('Cancel request')
                    let data = snapshot.val()
                    if(data){
                        onValue(ref(db, 'Request/' + value), snapshot=>{
                            console.log(1)
                            if(snapshot.val()){
                                clearChild(this.navBar)
                                if(data.some(u => u === value)){
                                    data[data.indexOf(value)] = null
                                    AddChild(this.navBar, cancelRequest.render())
                                    cancelRequest.Event('click', () =>{
                                        update(ref(db, 'Request/'),{
                                            [user.uid]: data
                                        })
                                    })
                                }else{
                                    if(snapshot.val().some(u => u === user.uid)){
                                        clearChild(this.navBar)
                                        AddChild(this.navBar, acceptBtn.render())
                                        AddChild(this.navBar, declineBtn.render())
                                        acceptBtn.Event('click', () => {
                                        let data = snapshot.val()
                                        data[data.indexOf(user.uid)] = null
                                        update(ref(db, 'Request/'),{
                                            [value]: data
                                        })
                                        })
                                        declineBtn.Event('click', () => {
                                        let data = snapshot.val()
                                        data[data.indexOf(user.uid)] = null
                                        update(ref(db, 'Request/'),{
                                            [value]: data
                                        })
                                    })
                                    }else{
                                    let data = snapshot.val()
                                    data = data.concat(value)
                                    AddChild(this.navBar, addFriendBtn.render())
                                    addFriendBtn.Event('click', ()=>{
                                        update(ref(db, 'Request/'),{
                                            [user.uid]: data
                                        })
                                    })}
                                }
                            }else{
                                clearChild(this.navBar)
                                if(data.some(u => u === value)){
                                    data[data.indexOf(value)] = null
                                    AddChild(this.navBar, cancelRequest.render())
                                    cancelRequest.Event('click', () =>{
                                        update(ref(db, 'Request/'),{
                                            [user.uid]: data
                                        })
                                    })
                                }else{
                                    data = data.concat(value)
                                    AddChild(this.navBar, addFriendBtn.render())
                                    addFriendBtn.Event('click', ()=>{
                                        update(ref(db, 'Request/'),{
                                            [user.uid]: data
                                        })
                                    })
                                }
                            }
                        })
                        
                    }else{
                        onValue(ref(db, 'Request/' + value), snapshot=>{
                            clearChild(this.navBar)
                            if(snapshot.val()){
                                if(snapshot.val().some(u => u === user.uid)){
                                    AddChild(this.navBar, acceptBtn.render())
                                    AddChild(this.navBar, declineBtn.render())
                                    acceptBtn.Event('click', () => {
                                        let data = snapshot.val()
                                        data[data.indexOf(user.uid)] = null
                                        update(ref(db, 'Request/'),{
                                            [value]: data
                                        })
                                    })
                                    declineBtn.Event('click', () => {
                                        let data = snapshot.val()
                                        data[data.indexOf(user.uid)] = null
                                        update(ref(db, 'Request/'),{
                                            [value]: data
                                        })
                                    })
                                }else{
                                    AddChild(this.navBar, addFriendBtn.render())
                                    addFriendBtn.Event('click', () =>{
                                    update(ref(db, 'Request/'),{
                                        [user.uid]: [value]
                                    })
                                })
                                }
                            }else{
                                AddChild(this.navBar, addFriendBtn.render())
                                addFriendBtn.Event('click', () =>{
                                update(ref(db, 'Request/'),{
                                        [user.uid]: [value]
                                })
                                })
                            }
                        })
                        
                    }
                })
                
            }
        })
        AddChild(this.box, this.coverImage)
        AddChild(this.box, this.navBar)
        AddChild(this.coverImage, this.information)
        AddChild(this.information, this.avatar)
        AddChild(this.information, this.userName)
        return this.box
    }
}

export default Profile