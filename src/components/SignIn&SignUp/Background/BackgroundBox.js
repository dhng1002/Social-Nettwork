import Background from "../../../asset/image/Background.jpg";
import Brigde from "../../../Javascript/Brigde";
import {tailwindAdd, New} from "../../../Javascript/tool"
const brigde = new Brigde()
class BackGround{
     constructor(){
          this.box = New('div');
          this.box.style.background = `url(${Background})`
          this.box.style.backgroundSize = 'auto 100%'
          this.box.style.backgroundPosition = '0'
          this.boxStyle = ['w-7/12', 'h-full', 'absolute','z-10','rounded-3xl']
          tailwindAdd(this.boxStyle, this.box)
          brigde.current(
               {
                    BackgroundBox: this.box
               }
          )
     }
     render(){
          return this.box
      }
     
}

export default BackGround
export {brigde}