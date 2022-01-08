
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { auth } from "../../../../Javascript/firebase";
import { AddChild, New, tailwindAdd } from "../../../../Javascript/tool";
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
        this.numberStyle = ['rounded-full', 'bg-indigo-700', 'text-white', 'w-6', 'h-6', 'text-center']
        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.requestCountStyle, this.requestCount)
        tailwindAdd(this.titleStyle, this.title)
        tailwindAdd(this.numberStyle, this.number)
        onAuthStateChanged(auth, user =>{
            if(user){
                onValue(ref(db, 'Request/'),snapshot =>{
                    if(snapshot.val()){
                    let arr = Object.keys(snapshot.val()).filter((anotherUser)=>{
                        return snapshot.val()[anotherUser].some(u => u === user.uid) 
                    })
                    this.number.innerHTML = arr.length
                    switch(arr.length){
                        case(0):{
                            break
                        }
                        case(1):{
                            console.log(2)
                            break
                        }
                        case(2):{
                            console.log(3)
                            break
                        }
                    }
                }else{
                    this.number.innerHTML = 0
                }
                })
            }
        })
        
    }
    render(){
        AddChild(this.box, this.requestCount)
        AddChild(this.requestCount, this.title)
        AddChild(this.requestCount, this.number)
        return this.box
    }
}

export default FriendRequest

