import React from 'react'

function TextArea(props) {
  return (
     
 
    <div className="form-group  mt-2">
    <label for={props.id}>{props.title}</label>
    <textarea name={props.name} className="form-control"  onChange={props.change}  id={props.id} rows="3"></textarea>
  </div>
 
  )
}

export default TextArea