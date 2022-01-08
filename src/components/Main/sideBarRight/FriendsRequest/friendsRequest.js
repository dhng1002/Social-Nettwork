import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { auth } from "../../../../Javascript/firebase";
import { AddChild, New, tailwindAdd } from "../../../../Javascript/tool";
import TagRecommend from "./friendRecommend";
import TagRequest from "./TagRequest";
const db = getDatabase()
class FriendRequest {
    constructor(){
        this.box = New('div')
        this.requestCount = New('div')
        this.title = New('p')
        this.number = New('p')
        this.title.innerHTML ='REQUESTS'
        this.boxStyle = ['w-full', 'h-52']
        this.requestCountStyle = ['flex', 'flex-row','justify-between', 'px-2', 'text-gray-400', 'items-center']
        this.titleStyle = ['text-gray-400']
        this.numberStyle = ['rounded-full', 'bg-sky-600', 'text-white', 'w-6', 'h-6', 'text-center']
        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.requestCountStyle, this.requestCount)
        tailwindAdd(this.titleStyle, this.title)
        tailwindAdd(this.numberStyle, this.number)
        onAuthStateChanged(auth, user =>{
            if(user){
                
            }
        })
        
    }
    removeBox(){
        for(let index = 0 ; index < this.box.children.length; index){
            if(this.box.children[index]!== this.requestCount){
            this.box.children[index].remove()
            }
        }
    }
    render(){
        AddChild(this.box, this.requestCount)
        AddChild(this.requestCount, this.title)
        AddChild(this.requestCount, this.number)
        return this.box
    }
}

export default FriendRequest