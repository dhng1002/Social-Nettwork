import { AddChild, SetAtt, New, tailwindAdd } from "../../../../../Javascript/tool"
import Icon from '../../../../../asset/image/account.png'
import {boxStyle, iconStyle, titleStyle} from '../ButtonStyle'
class Profile{
    constructor(){
        this.box = New('div')
        this.icon = New('img')
        this.title = New('p')

        SetAtt(this.icon, 'src', Icon)
        this.title.textContent = 'Profile'

        this.boxStyle = boxStyle
        this.iconStyle = iconStyle
        this.titleStyle = titleStyle
        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.iconStyle, this.icon)
        tailwindAdd(this.titleStyle, this.title)
    }
    render(){
        AddChild(this.box, this.icon)
        AddChild(this.box, this.title)
        return this.box
    }
}

export default Profile