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
        this.addFriendBtnStyle = ['bg-sky-400', 'px-4', 'py-2', 'font-bold', 'text-white', 'rounded-lg', 'z-20']
        this.acceptBtnStyle = ['bg-sky-400', 'px-4', 'py-2', 'font-bold', 'text-white', 'rounded-lg', 'mx-2','z-20'] 
        this.declineBtnStyle = ['bg-stone-500', 'px-4', 'py-2', 'font-bold', 'text-white', 'rounded-lg', 'mx-2', 'z-20']
        this.cancelRequestStyle = ['bg-sky-400', 'px-4', 'py-2', 'font-bold', 'text-white', 'rounded-lg','z-20']
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
                this.avatar.style.backgroundSize = `${size[0].replace('px','') * 160 / 208}px ${size[1].replace('px','') * 160 / 208}px`
            }
            if(data.position === '' || data.position === 'initial'){

                this.avatar.style.backgroundPosition = `100% auto`
            }else{
                position = data.position.split(' ')
                this.avatar.style.backgroundPosition = `${position[0].replace('px','') * 160 / 208}px ${position[1].replace('px','') * 160 / 208}px`
            }
            this.avatar.style.backgroundImage = `url(${data.url})`
            
            }
        })
        function clearChild(element){
            for(let index = 0 ; index < element.children.length ;){
                element.children[index].remove()
            }
        }
        onAuthStateChanged(this.auth, async user => {
            if(user){
                onValue(ref(db, 'Request/'),snapshot =>{
                    let addFriendBtn = new BaseButton('Add friend')
                    let cancelRequest = new BaseButton('Cancel Request')
                    let acceptBtn = new BaseButton('Accept')
                    let declineBtn = new BaseButton('Decline')
                    addFriendBtn.tailWindAdd(this.addFriendBtnStyle)
                    cancelRequest.tailWindAdd(this.cancelRequestStyle)
                    acceptBtn.tailWindAdd(this.acceptBtnStyle)
                    declineBtn.tailWindAdd(this.declineBtnStyle)
                    let data = snapshot.val()
                    let currentUser, anotherUser
                    if(snapshot.val()){
                        currentUser = data[user.uid]
                        anotherUser = data[value]
                        clearChild(this.navBar)
                        if(currentUser && !anotherUser){
                            if(currentUser.some(u => u === value)){
                                AddChild(this.navBar, cancelRequest.render())
                                cancelRequest.Event('click', () => {
                                    currentUser.indexOf(value) !== -1 ? currentUser.splice(currentUser.indexOf(value), 1) : null
                                    update(ref(db, 'Request/'),{
                                        [user.uid]: currentUser
                                    })
                                })
                            }else{
                                AddChild(this.navBar, addFriendBtn.render())
                                addFriendBtn.Event('click', () => {
                                currentUser = currentUser.concat(value)
                                update(ref(db, 'Request/'),{
                                    [user.uid]: currentUser
                                })
                            })
                            }
                        }else if(!currentUser && anotherUser){
                            if(anotherUser.some(u => u === user.uid)){
                                AddChild(this.navBar, acceptBtn.render())
                                AddChild(this.navBar, declineBtn.render())
                                anotherUser.indexOf(user.uid) !== -1 ? anotherUser.splice(anotherUser.indexOf(user.uid),1): null
                                acceptBtn.Event('click', ()=>{
                                    update(ref(db, 'Request/'),{
                                        [value]: anotherUser
                                    }) 
                                        update(ref(db, 'List Friend/'+ user.uid),{
                                            [value]:false
                                        })
                                        update(ref(db, 'List Friend/'+ value),{
                                            [user.uid]:false
                                        })
                                })
                                declineBtn.Event('click', ()=>{
                                    update(ref(db, 'Request/'),{
                                        [value]: anotherUser
                                    })
                                })
                            }else{
                                AddChild(this.navBar, addFriendBtn.render())
                                addFriendBtn.Event('click', ()=>{
                                    currentUser === undefined ? currentUser = [value] : currentUser = currentUser.concat(value)
                                    update(ref(db, 'Request/'),{
                                        [user.uid]: currentUser
                                    })
                                })
                            }
                        }else if (!anotherUser && !currentUser){
                            AddChild(this.navBar, addFriendBtn.render())
                            addFriendBtn.Event('click', () =>{
                                update(ref(db, `Request/`),{
                                    [user.uid]: [value]
                                })
                            })
                        }else if (anotherUser && currentUser){
                            if(currentUser.some(u => u === value) === false && anotherUser.some(u => u === user.uid) === true){
                                AddChild(this.navBar, acceptBtn.render())
                                AddChild(this.navBar, declineBtn.render())
                                anotherUser.indexOf(user.uid) !== -1 ? anotherUser.splice(anotherUser.indexOf(user.uid),1):null
                                acceptBtn.Event('click', ()=>{
                                    update(ref(db, 'Request/'),{
                                        [value]: anotherUser
                                    })     
                                        update(ref(db, 'List Friend/'+ user.uid),{
                                            [value]:false
                                        })
                                        update(ref(db, 'List Friend/'+ value),{
                                            [user.uid]:false
                                        })
                                })
                                declineBtn.Event('click', ()=>{
                                    update(ref(db, 'Request/'),{
                                        [value]: anotherUser
                                    })
                                    
                                })
                            }else if(currentUser.some(u => u === value) === true && anotherUser.some(u => u === value) === false){
                                AddChild(this.navBar, cancelRequest.render())
                                currentUser.indexOf(value) !== -1 ? currentUser.splice(currentUser.indexOf(value),1):null 
                                cancelRequest.Event('click', ()=>{
                                    update(ref(db, 'Request/'),{
                                        [user.uid]: currentUser
                                    })
                                })
                            }else if(currentUser.some(u => u === value) === false && anotherUser.some(u => u === value) === false){
                                AddChild(this.navBar, addFriendBtn.render())
                                addFriendBtn.Event('click', ()=>{
                                    currentUser === undefined ? currentUser = [value] : currentUser = currentUser.concat(value)
                                    update(ref(db, 'Request/'),{
                                        [user.uid]: currentUser
                                    })
                                })
                            }
                        }
                    }else{
                        clearChild(this.navBar)
                        if(!currentUser && !anotherUser){
                            AddChild(this.navBar, addFriendBtn.render())
                            addFriendBtn.Event('click', () =>{
                                update(ref(db, `Request/`),{
                                    [user.uid]: [value]
                                })
                            })
                        }
                    }
                    onValue(ref(db, 'List Friend/' + user.uid),snapshot =>{
                        if(snapshot.val()){
                            if(Object.keys(snapshot.val()).some(u => u===value)){
                                clearChild(this.navBar)
                            }
                        }
                    })
                    if(value === user.uid){
                        clearChild(this.navBar)
                        Event('click', this.avatar, ()=>{
                            set(ref(db, 'New User/' + user.uid),{haveSignIn: false})
                        })
                    }
                    AddChild(this.box, this.coverImage)
                    AddChild(this.box, this.navBar)
                    AddChild(this.coverImage, this.information)
                    AddChild(this.information, this.avatar)
                    AddChild(this.information, this.userName)
                })
            }
        })
        
        
        return this.box
    }
}

export default Profile