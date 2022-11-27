import React from 'react'

function Input(prop) {
  return (
    <input  id={prop.id} placeholder={prop.placeholder}  type={prop.type} onChange={prop.onChange}></input>
  )
}

export default Input