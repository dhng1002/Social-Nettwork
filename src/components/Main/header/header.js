import { AddChild, Element, Event, New, SetAtt, tailwindAdd } from "../../../Javascript/tool";
import Logo from '../../../asset/image/Logo.png'
import SearchBar from "./SearchBar/searchBar";
import NullAvatar from "../../../asset/image/Null Avatar.jpg"
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { auth } from "../../../Javascript/firebase";
import App from "../../../app";
class Header {
    constructor(){
        this.box = New('div')
        this.image = New('img')
        this.childBox = New('div')
        this.settingButton = New('img')
        this.searchBar = new SearchBar()
        this.auth = auth
        this.db = getDatabase()
        SetAtt(this.image, 'src', Logo)
        AddChild(this.childBox, this.searchBar.render())
        AddChild(this.childBox, this.settingButton)

        this.boxStyle = ['w-full', 'h-16', 'border', 'border-b-gray-200', 'flex', 'flex-row', 'items-center', 'justify-between', 'fixed', 'bg-white' , 'z-50']
        this.imageStyle = ['h-10', 'ml-16']
        this.settingButtonStyle = ['w-10', 'h-10', 'border-2', 'border-indigo-500/100', 'rounded', 'mx-6']
        this.childBoxStyle = ['flex', 'flex-row', 'items-center']


        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.imageStyle, this.image)
        tailwindAdd(this.settingButtonStyle, this.settingButton)
        tailwindAdd(this.childBoxStyle, this.childBox)

       
        
        Event('click', this.image, () =>{
            Element('#root').innerHTML = ''
            AddChild(Element('#root'), new App().render("Main"))
        })
    }
    render(){
        onAuthStateChanged(this.auth, (user)=>{
            if(user){
            onValue(ref(this.db, 'avatar/' + user.uid), snapshot=>{
                let size
                let position
                const data = snapshot.val()
                if(data !== null){
                if(data.size === 'initial' || data.size === 'cover'){
                    this.settingButton.style.backgroundSize = `cover`
                }else{
                    size = data.size.split(' ')
                    this.settingButton.style.backgroundSize = `${size[0].replace('px','') * this.settingButton.clientWidth / 208}px ${size[1].replace('px','') * this.settingButton.clientWidth / 208}px`
                }
                if(data.position === '' || data.position === 'initial'){

                    this.settingButton.style.backgroundPosition = `100% auto`
                }else{
                    position = data.position.split(' ')
                    this.settingButton.style.backgroundPosition = `${position[0].replace('px','') * this.settingButton.clientWidth / 208}px ${position[1].replace('px','') * this.settingButton.clientWidth / 208}px`
                }
                this.settingButton.style.backgroundImage = `url(${data.url})`
                
            }
            })
        }
        })
        AddChild(this.box, this.image)
        AddChild(this.box, this.childBox)
        return this.box
    }
}

export default Header