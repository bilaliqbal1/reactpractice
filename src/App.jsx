import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header,Logo} from './component/header'
import {Footer,Hello }from './component/footer'
import firebase from './config/firebase'

// install bootstrap through command 
// npm install react-boostrap bootstrap
// show in package file and also in node modules

// install firebase on react use npm i firebase command and import firebase
//function component 
// function App() {
//    render(
//      <div className="App">
//        <h1> hello word</h1>
//     </div>
//    );
// }

// class Header extends React.Component{
//   render(){
//     return (
//       <div className="header">
//         {/* inline style not preffer best is external css */}
//         {/* for making auto tag just rename js into jsx file and also change into index.js */}
//         <h2  style={{backgroundColor:'red',fontSize:'14px'}}> Header </h2>
        
//         </div>
//     )
//   }
// }
// class Footer extends React.Component{
//   render(){
//     return (
//       <div className="footer">
//         <h2> Footer </h2>
//         </div>
//     )
//   }
// }
// one component to another component (props)
// class component old react style
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todo : [{name: "bilal", edit: false }, {name: "ahmed", edit : false}],
      value: '',
      
    }
  }
  // first method with setstate and push method
  // addtodo = ()=>{
  //   // console.log(this.state.todo)

  //   this.state.todo.push(this.state.value)
  //   this.setState({
  //     todo: this.state.todo
  //   })
  // }
  // second method with spread operator ... 
  addtodo = ()=>{
    // console.log(this.state.todo)
    let obj = {name: this.state.value}
    this.setState({
      todo: [...this.state.todo,obj],
      value: ''
    })
  }
  deletetodo= (i)=>{
    // console.log("okay")
    this.state.todo.splice(i,1)
    this.setState({
      todo: this.state.todo
    })
  }
  edittodo= (i,v)=>{
    // console.log("okay")
    // var update = prompt("enter value");
    this.state.todo[i].edit = true;
    this.setState({
      todo: this.state.todo
    })
  }
  update  = (i)=>{
    // console.log("okay")
    // var update = prompt("enter value");
    this.state.todo[i].edit = false;
    this.setState({
      todo: this.state.todo
    })
  }
  handleChange = (e,i) =>{
    // console.log(e.target.value,i)
    this.state.todo[i].name= e.target.value;
    this.setState({
      todo: this.state.todo
    })
  }
  render(){
    let {todo, value} =this.state;
    let name ="bilal";
    let fname = "iqbal";
    let arr = [1,2,3,4,5];
    let todos = [{text:"bilal"},{text:"iqbal"}];
    return(
      
      <div className="App">
        
        <Header />
        <Logo />
        <h2>Todo app with state</h2>
        <input value={value} onChange={(e)=>this.setState({value: e.target.value})} type="text" placeholder="enter value" />
          <button onClick={this.addtodo}>Add item</button>
        <ul>
          {this.state.todo.map((v,i)=>{
            return <li key={i}>     {v.edit ? <input value={v.name} onChange={(e)=>this.handleChange(e, i)} type="text" placeholder="enter value"/> : v.name} 
            <button onClick={()=>this.deletetodo(i)}>Delete</button>
            {v.edit ?
            <button onClick={()=>this.update(i)}>update</button>
            :<button onClick={()=>this.edittodo(i,v.name)}>Edit</button>}

            </li>
            
          })}
        </ul>
        <h1> {` ${name} ${fname}`} </h1>
        <h1> {arr} </h1>
        {/* /*render todos with map */}
          
        <ul>
            {todos.map((item,index)=>{
              return <li key={index}> {item.text}</li>
              
            })

            }
          </ul>
          {/* self closing tag */}
          <Hello />
          <Footer />
        </div>
        
    )
  }
}
export default App;

