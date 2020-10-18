// import { render } from '@testing-library/react';
import React from 'react';

import Logoimage from '../images/logo512.png';
export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <h1> Header </h1>
                </div>
        )
    }
}

class Logo extends React.Component{
    constructor (){
        // is me hamesha super class lagti he
        // state jese hum dom use karte the usi tarah react me state use karte hain
        super()
        this.state = {
            name : "bilal",
            email : "bilal@gmail.com"
        }
    }
    // is me function use karsakhte hain lekin function nhi likhna keonke wo ek component he react me
    //arrow function parent ka this uthata he or simple function sirf apna
    set_name =() =>{
        this.setState({
            name : "iqbal"
        })
    }
    get_name = () =>{
      console.log(this.state.name)  
    }
    render(){
        return(
            <div>
                <h1> logo </h1>
                <img src={Logoimage} width="50" alt=""/>
                <input onChange={(i)=> this.setState({name:i.target.value})} type="text" placeholder="enter your name" id="name"/>
                <button onClick={this.set_name}>Set name</button>
                <button onClick={this.get_name}>Get name</button>
                <h2>{this.state.name} </h2>
                <h2>{this.state.email} </h2>
                </div>
        )
    }
}
export {
    Header,
    Logo,
};
// export default Header;