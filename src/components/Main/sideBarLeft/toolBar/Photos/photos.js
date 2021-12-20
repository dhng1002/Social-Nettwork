import { SetAtt } from "../../../../../Javascript/tool";
import Profile from "../profile/profile";
import Icon from '../../../../../asset/image/photo.png';

class Photos extends Profile{
    constructor(){
        super()
        SetAtt(this.icon, 'src', Icon)
        this.title.textContent = 'Photos'
    }
}

export default Photos