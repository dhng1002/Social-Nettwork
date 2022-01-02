import { New, SetAtt, Event, tailwindAdd} from "./tool";

class BaseInput{
    constructor(type, name, id){
        this.input = New('input')
        SetAtt(this.input, 'type', type)
        SetAtt(this.input, 'name', name)
        SetAtt(this.input, 'id', id)
    }
    Event(string, callback){
        this.input.addEventListener(string, callback)
    }
    tailWindAdd(arrayStyle){
        tailwindAdd(arrayStyle, this.input)
    }
    render(){
        return this.input
    }
}

class BaseLabel{
    constructor(name, title){
        this.label = New('label')
        this.label.textContent = title
        SetAtt(this.label, 'for', name)
    }
    tailWindAdd(arrayStyle){
        tailwindAdd(arrayStyle, this.label)
    }
    render(){
        return this.label
    }
}

class BaseButton{
    constructor(text){
        this.button = New('button')
        this.button.textContent = text
    }
    tailWindAdd(arrayStyle){
        tailwindAdd(arrayStyle, this.button)
    }
    Event(string, callback, option = true){
        this.button.addEventListener(string, callback, option)
    }
    RemoveEvent(string, callback, option = true){
        this.button.removeEventListener(string,callback, option)
    }
    render(){
        return this.button
    }
}

export {
    BaseInput,
    BaseLabel,
    BaseButton,
}