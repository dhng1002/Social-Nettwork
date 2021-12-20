import { SetAtt } from "../../../../../Javascript/tool";
import Profile from "../profile/profile";
import Icon from '../../../../../asset/image/save.png';

class Save extends Profile{
    constructor(){
        super()
        SetAtt(this.icon, 'src', Icon)
        this.title.textContent = 'Saved'
    }
}

export default Save