import React, { Component } from 'react'
 
export class SecondComponent extends Component {
  render() {
    return (
      <div >{this.props.text}{this.props.children}</div>
    )
  }
}

export default SecondComponent
