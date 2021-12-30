import { AddChild, Element, Elements, Event, New, RemoveEvent, SetAtt, tailwindAdd, tailwindRemove } from "../../../Javascript/tool";
import { getDatabase, ref, onValue, set, update} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../Javascript/firebase";
import { BaseButton, BaseInput, BaseLabel } from "../../../Javascript/base";
import { getDownloadURL, getStorage, ref as refStorage, uploadBytes } from "firebase/storage";
import SpiderManAvatar from "../../../asset/image/SpiderManAvatar.jpg"
import IronManAvatar from "../../../asset/image/IronManAvatar.jpg"
import ThorAvatar from "../../../asset/image/ThorAvatar.jpg"
import WandaAvatar from "../../../asset/image/WandaAvatar.jpg"
import BWAvatar from "../../../asset/image/BWAvatar.jpg"
import Camera from "../../../asset/image/Camera.png"
import NullAvatar from "../../../asset/image/Null Avatar.jpg"
const db = getDatabase();
const storage = getStorage()
class newAccountNotification {
    constructor(){
        this.box = New('div')
        this.child = New('div')
        this.listAvatar = New('div')
        this.information = New('div')
        this.showAvatar = New('div')
        this.confirmAvatar = New('div')
        this.showChoosen = New('div')
        this.EditPictureBox = New('div')
        this.checkSize = New('img')
        this.showEditPicture = New('div')
        this.btnNext = new BaseButton('NEXT')
        this.labelForImage = new BaseLabel('Pic', 'Photo library')
        this.ImageInput = new BaseInput('file', 'Pic', 'Pic')
        this.takePhotoBtn = new BaseButton('Take a photo')
        this.closeBtnChoosen = new BaseButton('Close')
        this.resizeImageInput = new BaseInput('range')
        this.openCamera = New('div')
        this.cameraScreen = New('video')
        this.bottomCameraBar = New('div')
        this.capture = new BaseButton()
        this.resetBtn = new BaseButton('RESET')
        this.useBtn = new BaseButton('USE THIS PHOTO')
        this.bottomBar = New('div')
        this.backBtn = new BaseButton('BACK')
        this.nextBtn = new BaseButton('NEXT')
        this.confirmBtn = new BaseButton('Confirm')
        this.auth = auth
        this.showChoosenOpen = false
        this.share
        this.currentX
        this.currentY
        this.isClickDown = false
        this.urlPicture = NullAvatar
        this.boxStyle = ['fixed', 'w-full', 'h-full', 'bg-[rgba(124,58,237,0.8)]', 'z-20', 'flex', 'items-center', 'justify-center', 'hidden', ]
        this.childStyle = ['w-800', 'h-96', 'bg-white' , 'rounded-3xl', 'flex', 'flex-row', 'flex-wrap']
        this.listAvatarStyle = ['w-2/4','h-3/4', 'pl-6' , 'pr-2', 'overflow-y-auto']
        this.informationStyle = ['w-2/4','h-3/4', 'flex', 'flex-col', 'items-center', 'justify-center']
        this.showAvatarStyle = ['w-52', 'h-52', 'ring-4', 'rounded-3xl', 'ring-rose-800']
        this.showChoosenStyle = ['absolute','text-center', 'text-white', 'w-64', 'h-36','divide-y', 'bg-[rgb(100,116,139,0.9)]', 'rounded-3xl', 'hidden', 'flex', 'flex-col']
        this.EditPictureBoxStyle = ['w-screen', 'h-screen', 'bg-slate-900', 'absolute', 'hidden', 'flex','flex-col', 'justify-center', 'items-center']
        this.openCameraStyle = ['w-screen', 'h-screen', 'bg-slate-900','flex','flex-col', 'justify-center', 'items-center']
        this.cameraScreenStyle = ['w-fit', 'h-fit', 'rounded-2xl', 'border-2']
        this.showEditPictureStyle = ['border-2', 'w-96', 'h-96']
        this.bottomBarStyle = ['flex', 'flex-row', 'justify-between', 'w-full']
        this.bottomCameraBarStyle = ['flex', 'flex-row', 'justify-start', 'items-center', 'text-white', 'mt-8','font-semibold', 'w-96', 'relative']
        this.confirmAvatarStyle = ['basis-full', 'h-fit', 'flex', 'justify-center', 'items-center']
        this.checkSizeStyle = ['w-12','h-auto']
        this.ImageInput.tailWindAdd(['hidden'])
        this.labelForImage.tailWindAdd(['grow', 'py-2'])
        this.takePhotoBtn.tailWindAdd(['grow', 'py-2'])
        this.closeBtnChoosen.tailWindAdd(['grow', 'py-2'])
        this.resizeImageInput.tailWindAdd(['mt-4' , 'w-72'])
        this.nextBtn.tailWindAdd(['bg-green-400', 'w-24', 'h-8', 'mx-8', 'rounded-xl'])
        this.backBtn.tailWindAdd(['bg-rose-400', 'w-24', 'h-8', 'mx-8', 'rounded-xl'])
        this.resetBtn.tailWindAdd(['border-2', 'rounded-lg', 'p-2', 'mr-6'])
        this.useBtn.tailWindAdd(['border-2', 'rounded-lg', 'p-2'])
        this.capture.tailWindAdd(['w-12', 'h-12' , 'rounded-full', 'bg-white', 'absolute', 'right-0'])
        this.confirmBtn.tailWindAdd(['bg-green-500', 'px-6', 'py-2', 'rounded', 'text-white', 'font-bold','tracking-wider'])
        this.listImg = [SpiderManAvatar, IronManAvatar, ThorAvatar , WandaAvatar, BWAvatar, Camera]
        this.listImg.forEach((img) =>{
            this.listAvatar.innerHTML += `<img class="w-20 h-20 rounded-2xl mr-4 mb-4 object-cover" src="${img}">`
        })
        this.listAvatar.innerHTML = `
        <h1 class="font-semibold mt-4 mb-4 inline-block w-full text-center">Select your avatar</h1>
        <div class="flex flex-row flex-wrap justify-center ">
        ${this.listAvatar.innerHTML}
        </div>`

        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.childStyle, this.child)
        tailwindAdd(this.listAvatarStyle, this.listAvatar)
        tailwindAdd(this.informationStyle, this.information)
        tailwindAdd(this.showAvatarStyle, this.showAvatar)
        tailwindAdd(this.showChoosenStyle, this.showChoosen)
        tailwindAdd(this.EditPictureBoxStyle, this.EditPictureBox)
        tailwindAdd(this.showEditPictureStyle, this.showEditPicture)
        tailwindAdd(this.bottomBarStyle, this.bottomBar)
        tailwindAdd(this.EditPictureBoxStyle, this.openCamera)
        tailwindAdd(this.cameraScreenStyle, this.cameraScreen)
        tailwindAdd(this.bottomCameraBarStyle, this.bottomCameraBar)
        tailwindAdd(this.confirmAvatarStyle, this.confirmAvatar)
        tailwindAdd(this.checkSizeStyle, this.checkSize)
        AddChild(this.information, this.showAvatar)
        AddChild(this.showChoosen, this.labelForImage.render())
        AddChild(this.showChoosen, this.ImageInput.render())
        AddChild(this.showChoosen, this.takePhotoBtn.render())
        AddChild(this.showChoosen, this.closeBtnChoosen.render())
        AddChild(this.EditPictureBox, this.showEditPicture)
        AddChild(this.EditPictureBox, this.resizeImageInput.render())
        AddChild(this.bottomBar, this.backBtn.render())
        AddChild(this.bottomBar, this.nextBtn.render())
        AddChild(this.EditPictureBox, this.bottomBar)
        AddChild(this.openCamera, this.cameraScreen)
        AddChild(this.openCamera, this.bottomCameraBar)
        AddChild(this.bottomCameraBar, this.resetBtn.render())
        AddChild(this.bottomCameraBar, this.capture.render())
        AddChild(this.bottomCameraBar, this.useBtn.render())
        AddChild(this.confirmAvatar, this.confirmBtn.render())
        this.showAvatar.style.backgroundImage = `url(${this.urlPicture})`
        this.showAvatar.style.backgroundPosition = `100% auto`
        this.showAvatar.style.backgroundSize = `cover`
        this.takePhotoBtn.Event('click', async (e)=>{
            if (!"mediaDevices" in navigator || !"getUserMedia" in navigator.mediaDevices) {
                alert('Not support camera')
            }else{
                const constraints = {
                    video: {
                        width: 380,
                        height: 380,
                    }
                  }
                const videoStream = await navigator.mediaDevices.getUserMedia(constraints)
                .then(data => {
                    this.cameraScreen.srcObject = data
                    const tracks = this.cameraScreen.srcObject.getTracks()
                    let start = this.cameraScreen
                    this.cameraScreen.onloadedmetadata = function(e) {
                        start.play();
                      };
                    this.capture.Event('click', ()=>{
                        start.pause()
                        
                    this.resetBtn.Event('click', ()=>{
                        start.play()
                    })
                    this.useBtn.Event('click', () =>{
                        let canvas = New('canvas')
                        let context = canvas.getContext('2d');
                        canvas.width = 380
                        canvas.height = 380
                        context.drawImage(start, 0, 0, 380, 380)
                        var data = canvas.toDataURL('image/png');
                        fetch(data).then(()=>{
                            this.urlPicture = data
                            this.showAvatar.style.background = `url(${this.urlPicture})`
                            this.showAvatar.style.backgroundSize = 'cover'
                            this.showAvatar.style.backgroundPosition = `auto auto`
                            tailwindAdd(['hidden'], this.openCamera)
                            tracks[0].stop()
                        })
                    })
                    })
                })
                tailwindRemove(['hidden'], this.openCamera)
            }
        })
        this.ImageInput.Event('change', this.handleFile.bind(this))
        onAuthStateChanged(auth, user =>{
            if(user){
            const checkNewMember = ref(db, 'New User/' + user.uid )
            onValue(checkNewMember, snapshot =>{
                if (snapshot.val().haveSignIn === false){
                    tailwindRemove(['hidden'], this.box)
                }else if(snapshot.val().haveSignIn === true){
                    tailwindAdd(['hidden'], this.box)
                }
            })
            }
        })
        for(let index = 0; index < this.listAvatar.children[1].children.length; index++){
            Event('click', this.listAvatar.children[1].children[index], this.handleClick.bind(this))
        }
        Event('click', Element('body'), (e)=>{
            if(e.target !== this.showChoosen && e.target !== this.labelForImage.render() && e.target !== this.takePhotoBtn.render()){
                tailwindAdd(['hidden'], this.showChoosen)
            }
        })
        Event('mousedown', this.showEditPicture, (e)=>{
            if(this.isClickDown === false){
                this.isClickDown = true
                this.currentX = e.offsetX
                this.currentY = e.offsetY
            }
        })
        Event('mousemove', this.showEditPicture, (e)=>{
            if(this.isClickDown === true){
                
                e.target.style.backgroundPosition = `${this.share[3] - (this.currentX - e.offsetX)}px ${this.share[4] - (this.currentY - e.offsetY)}px`
            }
        })
        Event('mouseup', this.showEditPicture, (e)=>{
            this.isClickDown = false
            this.share[3] = this.share[3] - (this.currentX - e.offsetX)
            this.share[4] = this.share[4] - (this.currentY - e.offsetY)
            console.log(this.share[3], this.share[4])
        })
        Event('wheel', this.EditPictureBox, (e) =>{
            if(e.deltaY >= 0 ){
                this.share[1] = this.share[1] - 10
                this.share[2] = this.share[1] * (1/this.share[0])
                this.resizeImageInput.input.value = this.share[1]
                this.showEditPicture.style.backgroundSize = `${this.share[1]}px ${this.share[2]}px`
            } else if (e.deltaY <= 0 ) {
                this.share[1] = this.share[1] + 10
                this.share[2] = this.share[1] * (1/this.share[0])
                this.resizeImageInput.input.value = this.share[1]
                this.showEditPicture.style.backgroundSize = `${this.share[1]}px ${this.share[2]}px`
            }
        })
        this.nextBtn.Event('click', () =>{
            this.ImageInput.input.value = null
            this.showAvatar.style.backgroundImage = `url(${this.share[5]})`
            this.showAvatar.style.backgroundPosition = `${this.share[3] * this.showAvatar.clientWidth/ 380}px ${this.share[4] *this.showAvatar.clientHeight / 380}px`
            this.showAvatar.style.backgroundSize = `${this.share[1]* this.showAvatar.clientWidth/ 380}px ${this.share[2]* this.showAvatar.clientHeight/ 380}px`
            this.showAvatar.style.backgroundRepeat = `no-repeat`
            tailwindRemove(['bg-cover'], this.showAvatar)
            tailwindAdd(['hidden'], this.EditPictureBox)
            onAuthStateChanged(auth, user=>{
                if(user){
                    getDownloadURL(refStorage(storage, `${user.uid}/avatar`))
                    .then(url => this.urlPicture = url)
                    .catch(()=>{
                        this.urlPicture = NullAvatar
                        this.showAvatar.style.backgroundImage = `url(${NullAvatar})`
                        this.showAvatar.style.backgroundPosition = `auto auto`
                        this.showAvatar.style.backgroundSize = `cover`
                        alert(`Can't download your avatar, please try again`)
                    })
                }
                
            })
            
        })
        this.backBtn.Event('click', ()=>{
            tailwindAdd(['hidden'], this.EditPictureBox)
        })
        this.resizeImageInput.Event('change', (e)=>{
            this.share[1] = parseInt(e.target.value)
            this.share[2] = this.share[1] * (1/this.share[0])
            this.showEditPicture.style.backgroundSize = `${this.share[1]}px ${this.share[2]}px`

        })
        this.confirmBtn.Event('click', ()=>{
            let position = this.showAvatar.style.backgroundPosition
            let size = this.showAvatar.style.backgroundSize
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    set(ref(db, 'mail and name/' + user.uid),{
                        mail: user.email,
                        name: user.displayName
                    })
                    set(ref(db, 'avatar/' + user.uid),{
                        url: this.urlPicture,
                        position: position,
                        size: size
                    })
                    update(ref(db, 'New User/' + user.uid),{
                        haveSignIn: true
                    })
                }
            })
        })
    }
    handleFile(e){
        if(e.target.files[0].size < 2000000){
            onAuthStateChanged(auth , user =>{
                if(user){
                    const userRef = refStorage(storage, `${user.uid}/avatar`);
                    uploadBytes(userRef, e.target.files[0])
                    .then(snapshot => { console.log('upload')})
                }
            })
        }
        const fileImgURL = URL.createObjectURL(e.target.files[0])
        const img = New('img')
        SetAtt(img, 'src', fileImgURL)
       
        tailwindRemove(['hidden'], this.EditPictureBox)
        this.takeSizeImage(img, fileImgURL)
    }
    takeSizeImage(element, picture){
        Event('load', element,  (e) =>{
            let ratioImage = e.target.width / e.target.height
            let imgSizeX, imgSizeY , imgPostionX, imgPostionY

            if(ratioImage < 1){
                imgSizeY = this.showEditPicture.clientHeight
                imgSizeX = imgSizeY * ratioImage
                imgPostionY = 0
                imgPostionX = (this.showEditPicture.clientWidth - imgSizeX) / 2
            }else if (ratioImage > 1){
                imgSizeX = this.showEditPicture.clientWidth
                imgSizeY = imgSizeX * (1 / ratioImage)
                imgPostionX = 0
                imgPostionY = (this.showEditPicture.clientHeight - imgSizeY) / 2
            }else if (ratioImage = 1){
                imgSizeX = this.showEditPicture.clientWidth
                imgSizeY = imgSizeX
                imgPostionX = 0 
                imgPostionY = 0
            }
            this.showEditPicture.style.backgroundImage = `url(${picture})`
            this.showEditPicture.style.backgroundSize = `${imgSizeX}px ${imgSizeY}px`
            this.showEditPicture.style.backgroundPosition = `${imgPostionX}px ${imgPostionY}px`
            this.showEditPicture.style.backgroundRepeat = 'no-repeat'
            this.share = [ratioImage, imgSizeX, imgSizeY , imgPostionX, imgPostionY, picture]
            console.log(this.share)
            SetAtt(this.resizeImageInput.input, 'min', this.share[1])
            SetAtt(this.resizeImageInput.input, 'max', 500)
            SetAtt(this.resizeImageInput.input, 'value', 0)
        })
    }

    handleClick(e){
        e.stopPropagation()
        if(e.target.src === Camera){
            tailwindRemove(['hidden'], this.showChoosen)
            this.showChoosenOpen = true
        }else{
            for(let index = 0; index < this.listAvatar.children[1].children.length; index++){
                this.listAvatar.children[1].children[index] === e.target ?
                tailwindAdd(['ring-2', 'ring-amber-700'], e.target) :
                tailwindRemove(['ring-2', 'ring-amber-700'], this.listAvatar.children[1].children[index])
            }
            this.urlPicture = e.target.src
            this.showAvatar.style.background = `url(${this.urlPicture})`
            tailwindAdd(['bg-cover'], this.showAvatar)
        }
    }
    render(){
        AddChild(this.box, this.child)
        AddChild(this.child, this.listAvatar)
        AddChild(this.child, this.information)
        AddChild(this.box, this.showChoosen)
        AddChild(this.box, this.EditPictureBox)
        AddChild(this.box, this.openCamera)
        AddChild(this.child, this.confirmAvatar)
        return this.box
    }
}

export default newAccountNotification