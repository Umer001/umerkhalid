 import React, { Component } from 'react'
 import SecondComponent from './secondComponent'
 export class FirstComponent extends Component {
   
   render() {
        let {text,children}=this.props;
     return (
      
       <SecondComponent text={text}>{children}</SecondComponent>
     )
   }
 }

 export default FirstComponent
 