import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { BaseInput, BaseLabel } from "../../../../Javascript/base";
import { auth } from "../../../../Javascript/firebase";
import { AddChild, Event, New, RemoveEvent, SetAtt, tailwindAdd, tailwindRemove } from "../../../../Javascript/tool";
import { brigde } from "../../main";
import Profile from "../../../Profile/Profile";
class SearchBar {
    constructor(){
        this.box = New('div')
        this.SearchBar = new BaseInput('text', 'searchBar', 'searchBar')
        this.listInformation = New('div')
        this.listInformation.textContent = 'Nothing to find'
        this.db = getDatabase()
        this.auth = auth
        this.mail
        this.mouseIn
        this.avatar
        this.boxStyle = ['relative', 'w-64','max-w-full']
        this.SearchBarStyle = ['w-full', 'bg-white', 'rounded-lg', 'pl-4', 'h-8', 'border', 'border', 'border-zinc-400']
        this.listInformationStyle = ['w-full', 'hidden', 'h-10', 'absolute', 'bg-white', 'rounded-b-lg', 'text-center', 'p-2', 'flex', 'flex-col', 'shadow-2xl']
        SetAtt(this.SearchBar.input, 'placeholder', 'Search email')
        SetAtt(this.SearchBar.input, 'autocomplete', 'off')

        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.SearchBarStyle, this.SearchBar.input)
        tailwindAdd(this.listInformationStyle, this.listInformation)
        this.SearchBar.Event('keyup', this.handleSearch.bind(this))
        this.SearchBar.Event('blur', this.handleBlur.bind(this))
        Event('mouseenter', this.listInformation, () =>{
            this.mouseIn = true
        })
        Event('mouseleave', this.listInformation, () => {
            this.mouseIn = false
        })
        onValue(ref(this.db, 'mail and name'), snapshot => {
            this.mail = snapshot.val()
        })
        onValue(ref(this.db, 'avatar'), snapshot => {
            this.avatar = snapshot.val()
        })
    }
    handleBlur(e){
        if(this.mouseIn === false){
            tailwindAdd(['hidden'], this.listInformation)
            e.target.value = ''
        }
    }
    handleSearch(e){
        let elements = []
        Object.keys(this.mail).forEach(userIndex =>{
            elements = elements.concat({
                mail: this.mail[userIndex].mail,
                url: this.avatar[userIndex].url,
                position: this.avatar[userIndex].position,
                size: this.avatar[userIndex].size,
                name: this.mail[userIndex].name,
                uid: userIndex
            })
        })
        if(e.target.value.length > 3){
            tailwindRemove(['hidden'], this.listInformation)
            tailwindRemove(['rounded-lg'], this.SearchBar.input)
            tailwindAdd(['rounded-t-lg'], this.SearchBar.input)
            let result = elements.filter(element => {
                return element.mail.includes(e.target.value)
            })
            if(result.length === 0){
                tailwindAdd(['p-2', 'h-10'],this.listInformation)
                this.listInformation.textContent= 'Nothing to find'
            }else{
                let child = ''
                tailwindRemove(['p-2', 'h-10'],this.listInformation)
                result.forEach(element => {
                    if (element.position === '' || element.position === 'initial'){
                        element.position = `100% auto`
                    }else{
                        let position = element.position.split(' ')
                        element.position = `${position[0].replace('px','') * 32 / 208}px ${position[1].replace('px','') * 32 / 208}px`
                    }
                    if (element.size === 'initial' || element.size === 'cover'){
                        element.size = 'cover'
                    }else{
                        let size = element.size.split(' ')
                        element.size = `${size[0].replace('px','') * 32 / 208}px ${size[1].replace('px','') * 32 / 208}px `
                    }
                    child = child + `<div class="p-4 flex flex-row items-center" data="${element.uid}">
                        <div style="background-image: url(${element.url}); background-size:${element.size}; background-position:${element.position}" class="h-8 w-8 rounded-lg"></div>
                        <div class="ml-4 h-fit">${element.name}</div>
                    </div>`
                })
                this.listInformation.innerHTML = child                
            }
            for(let index = 0 ; index < this.listInformation.children.length; index++){
                Event('click', this.listInformation.children[index], (e) =>{
                    for(let index = 0; index < brigde.currentValue.box.children.length  ; index++){
                        if(brigde.currentValue.box.children[index] !== brigde.currentValue.header && brigde.currentValue.box.children[index] !== brigde.currentValue.notfication){
                            (brigde.currentValue.box.children[index].remove())
                            index = 0
                        }
                    }
                    AddChild(brigde.currentValue.box, new Profile().render(this.listInformation.children[index].getAttribute('data')))
                    tailwindAdd(['hidden'], this.listInformation)
                    this.SearchBar.input.value = ''
                })
                Event('mouseenter', this.listInformation.children[index], (e)=>{
                    tailwindRemove(['bg-white'], e.target)
                    tailwindAdd(['bg-slate-200'], e.target)
                })
                Event('mouseleave', this.listInformation.children[index], (e)=>{
                    tailwindAdd(['bg-white'], e.target)
                    tailwindRemove(['bg-slate-200'], e.target)
                })
                
            }
        }
    }
    render(){

        AddChild(this.box, this.SearchBar.render())
        AddChild(this.box, this.listInformation)
        console.log(this.box)
        return this.box
    }
}

export default SearchBar