import React, { Component } from 'react';
import './App.sass';
import GameSet from "./gameSet"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

let stata = 0;

//Функция генератции случайных чисел.
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//Функция для взаимодейсвия игрока и игровоко поля, так же она отслеживает оставшееся кол-во кораблей на поле бота.
function chosePlayer(e) {

  let index = [].indexOf;
  let arr = [];
  let shootingStar = document.querySelector(".shootingStar");
  let finish = document.querySelector("#finish");
  let name  = document.querySelectorAll(".name");
  let guard  = document.querySelector(".guard");
  let exodus = document.querySelector("#exodus");
  let i = document.querySelector("#i");

  if(e.target.className === "shipblock" ){
  e.target.className = "explosion"
  stata = stata + 1;
  }
  else if (e.target.className === "void") {
  e.target.className = "miss";
  name[0].classList.remove("youtourn");
  name[1].classList.add("youtourn");
  guard.style.zIndex = 100;
  setTimeout(choseRobot, 1100);
  }
  
  for (let n = 0; n < shootingStar.children.length; n++) {
    arr.push(shootingStar.children[n].className)
  }
  
  if(index.call(arr, "shipblock") < 0) {
  exodus.innerHTML = "ВЫ ПОБЕДИЛИ!"
  i.innerHTML = stata
  finish.className = "vise"
  }

}

//Функция для взаимодейсвия бота и игровоко поля, так же она отслеживает оставшееся кол-во кораблей на поле игрока.
function choseRobot() {

  let index = [].indexOf;
  let arr = [];
  let shootingStar = document.querySelector(".myFlit");
  let finish = document.querySelector("#finish");
  let exodus = document.querySelector("#exodus");
  let i = document.querySelector("#i");
  let name  = document.querySelectorAll(".name");
  let guard  = document.querySelector(".guard");
  let random = shootingStar.children[parseInt(getRandomArbitrary(0, 99))];

  if( random.className === "shipblock" ){
    random.className = "explosion"
    setTimeout(choseRobot, 1100)
  }
  else if ( random.className === "void" ) {
    random.className = "miss"
    name[0].classList.add("youtourn");
    name[1].classList.remove("youtourn");
    guard.style.zIndex = -100
  }
  else if ( random.className === "explosion" || "miss" ) {
    choseRobot()
    return
  }

  for (let n = 0; n < shootingStar.children.length; n++) {
    arr.push(shootingStar.children[n].className)
  }

  if(index.call(arr, "shipblock") < 0) {
  exodus.innerHTML = "Поражение."
  i.innerHTML = stata
  finish.className = "vise"
  }

}

class gameApp extends Component {
  constructor(){
    super()
    this.state = {
      myMap: GameSet[parseInt(getRandomArbitrary(0, 29))],
      enemyMap: GameSet[parseInt(getRandomArbitrary(0, 29))],
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
          <div className="leftPolosa">
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>I</li>
              <li>J</li>
            </ul>
          </div>
          <div className="topPolosa">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
            </ul>
          </div>
          {this.state.myMap.map( el => {
            return (
              el.map( el => {
                return (
                  <div className={`${el}`} key={ getRandomArbitrary(0, 209) }></div>
                )
              })
            )
          })}
        </div>
        </div>
        <div className="gameBlockMini">
        <span className="name">{this.props.base[0].botName}</span>
        <div className="shootingStar" onClick={chosePlayer}>
        <div className="leftPolosa">
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>I</li>
              <li>J</li>
            </ul>
          </div>
          <div className="topPolosa">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
            </ul>
          </div>
        <section className="guard" style={{zIndex: -100}}/>
        {this.state.enemyMap.map( el => {
            return (
              el.map( el => {
                return (
                  <div className={`${el}`} key={ getRandomArbitrary(209, 329) }></div>
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