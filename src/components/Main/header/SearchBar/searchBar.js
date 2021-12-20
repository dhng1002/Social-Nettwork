import { BaseInput, BaseLabel } from "../../../../Javascript/base";
import { AddChild, New, SetAtt, tailwindAdd } from "../../../../Javascript/tool";

class SearchBar {
    constructor(){
        this.box = New('div')
        this.SearchBar = new BaseInput('text', 'searchBar', 'searchBar')
        

        this.boxStyle = ['relative', 'w-64','max-w-full']
        this.SearchBarStyle = ['w-full', 'bg-slate-200', 'text-white', 'rounded-lg', 'pl-4', 'h-8']

        SetAtt(this.SearchBar.input, 'placeholder', 'Search')

        tailwindAdd(this.boxStyle, this.box)
        tailwindAdd(this.SearchBarStyle, this.SearchBar.input)
    }
    render(){
        AddChild(this.box, this.SearchBar.render())
        return this.box
    }
}

export default SearchBar