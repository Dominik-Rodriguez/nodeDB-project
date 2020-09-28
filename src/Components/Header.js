import React, {Component} from 'react'
//display only component

export default class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <header className="super">
                <h1>Client Plan Maker!</h1>
            </header>
        )
    }
}