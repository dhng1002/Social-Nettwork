import { SetAtt } from "../../../../../Javascript/tool";
import Profile from "../profile/profile";
import Icon from '../../../../../asset/image/friends.png';

class Friends extends Profile{
    constructor(){
        super()
        SetAtt(this.icon, 'src', Icon)
        this.title.textContent = 'Friends'
    }
}

export default Friends