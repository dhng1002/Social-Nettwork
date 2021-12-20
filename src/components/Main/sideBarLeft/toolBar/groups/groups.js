import { SetAtt } from "../../../../../Javascript/tool";
import Profile from "../profile/profile";
import Icon from '../../../../../asset/image/group.png';

class Groups extends Profile{
    constructor(){
        super()
        SetAtt(this.icon, 'src', Icon)
        this.title.textContent = 'Groups'
    }
}

export default Groups