import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleKeyPress = (e) => {
    if(e.key === 'a') {
      return resize('+')
    } else {
      return resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onKeyDown = {this.handleKeyPress}
        onClick = {toggleCycling}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
