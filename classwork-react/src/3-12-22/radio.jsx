import React from 'react'

function Radio(prop) {
  return (
  
    <div className="form-check mt-2">
  <input className="form-check-input" type="radio" name={prop.name}  onChange={prop.change}  id={prop.id} value={prop.value} />
  <label className="form-check-label" for={prop.id}>
  {prop.value}
  </label>
</div>

   
    
  )
}

export default Radio