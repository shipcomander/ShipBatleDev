import React, { Component } from 'react';
import './App.sass';
import GameSet from "./gameSet"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import motor from "./motor"
import Polosa from "./polosi"

class gameApp extends Component {
  constructor(){
    super()
    this.state = {
      myMap: GameSet[parseInt(motor.getRandomArbitrary(0, 29))],
      enemyMap: GameSet[parseInt(motor.getRandomArbitrary(0, 29))],
    }
  }
  
  render() {
    return (
    <React.Fragment>
      <div id="finish" className="invise">
        <span id="exodus" />
        <span>Ваши попадения: <i id="i" /> </span>
      </div>
      <div id="gameInterface">
        <Link to="/">{""}</Link>
      </div>
      <div id="gameBlock">
        <div className="gameBlockMini">
      <span className="name youtourn">{this.props.base[0].myName}</span>
        <div className="myFlit">
          <Polosa />
          {this.state.myMap.map( el => {
            return (
              el.map( el => {
                return (
                  <div className={`${el}`} key={ motor.getRandomArbitrary(0, 209) }></div>
                )
              })
            )
          })}
        </div>
        </div>
        <div className="gameBlockMini">
        <span className="name">{this.props.base[0].botName}</span>
        <div className="shootingStar" onClick={(event) => motor.chose(true, event)}>
        <Polosa />
        <section className="guard" style={{zIndex: -100}}/>
        {this.state.enemyMap.map( el => {
            return (
              el.map( el => {
                return (
                  <div className={`${el}`} key={ motor.getRandomArbitrary(209, 329) }></div>
                )
              })
            )
          })}
        </div>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default connect(
  (store)=>{
    return {
      base: store.name,
    }
  },
) (gameApp);