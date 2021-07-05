import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let x = event.clientX;
    let y =  event.clientY;
    drawChromeBoiAtCoords(x,y);
  }
  handleKeyEvent = (e) => {
     if(e.key == "a"){
       resize("+");
     }
     else if(e.key == "s"){
       resize("-");
     }
     else{

     }
   }


  render() {
    return (
      <canvas onKeyDown={this.handleKeyEvent}
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
