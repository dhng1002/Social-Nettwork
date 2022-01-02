import { AddChild, New, SetAtt, tailwindAdd } from "../../../Javascript/tool";
import Logo from '../../../asset/image/Logo.png'
import SearchBar from "./SearchBar/searchBar";
import NullAvatar from "../../../asset/image/Null Avatar.jpg"
import { onAuthStateChanged } from "firebase/auth";

class Header {
    constructor(){
        this.box = New('div')
        this.image = New('img')
        this.childBox = New('div')
        this.settingButton = New('img')
        this.searchBar = new SearchBar()
        SetAtt(this.settingButton, 'src', NullAvatar)
        SetAtt(this.image, 'src', Logo)
        AddChild(this.childBox, this.searchBar.render())
        AddChild(this.childBox, this.settingButton)

        this.boxStyle = ['w-full', 'h-16', 'border', 'border-b-gray-200', 'flex', 'flex-row', 'items-center', 'justify-between', 'fixed', 'bg-white']
        this.imageStyle = ['h-10', 'ml-16']
        this.settingButtonStyle = ['w-10', 'h-10', 'border-2', 'border-indigo-500/100', 'rounded', 'mx-6']
        this.childBoxStyle = ['flex', 'flex-row', 'items-center']

        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.imageStyle, this.image)
        tailwindAdd(this.settingButtonStyle, this.settingButton)
        tailwindAdd(this.childBoxStyle, this.childBox)


    }
    render(){
        AddChild(this.box, this.image)
        AddChild(this.box, this.childBox)
        return this.box
    }
}

export default Header