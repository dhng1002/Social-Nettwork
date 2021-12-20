import { New, SetAtt, Event} from "./tool";

class BaseInput{
    constructor(type, name, id){
        this.input = New('input')
        this.event = Event
        SetAtt(this.input, 'type', type)
        SetAtt(this.input, 'name', name)
        SetAtt(this.input, 'id', id)
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
    render(){
        return this.label
    }
}

class BaseButton{
    constructor(text){
        this.button = New('button')
        this.button.textContent = text
    }
    render(){
        return this.button
    }
}

export {
    BaseInput,
    BaseLabel,
    BaseButton
}