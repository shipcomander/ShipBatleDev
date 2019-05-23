import React, { Component } from 'react';
import './App.sass';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { set_name } from '../action/name.action';

class Index extends Component {
  constructor(){
    super()
    this.state = {
      myName: "",
      botName: "",
    }
  }
  
  changeName = (e) => {
    this.setState({myName: e.target.value})  
  }
  changebotName = (e) => {
    this.setState({botName: e.target.value})  
   }

  render() {
    return (
      <div id="coreBlock">
        <h4>Добро пожаловать в "Морской бой"!</h4>
        <div className="input">
        <div><span>Имя игрока: </span>
        <input id="myName" value={this.state.myName} onChange={this.changeName} /></div>
        <div><span>Имя бота: </span>
        <input id="botName" value={this.state.botName} onChange={this.changebotName} /></div>
        </div>
        <Link to="./App" className="span" onMouseDown={()=>this.props.set_name(this.state["myName"], this.state["botName"])}> Играть </Link>
      </div>
    );
  }
}

export default connect(
  ( store )=>{
    return {
      base: store.name,
    }
  },
  (dispatch)=>{
    return{
      async set_name (myName, bootName){
        const action = await set_name(myName, bootName);
        dispatch(action);
      },      
    }
    }
) (Index);