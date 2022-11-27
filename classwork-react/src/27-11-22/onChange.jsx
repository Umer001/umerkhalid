import React, { useState } from "react"; 
import Input from "./input";
function OnChange() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [dob, setDob] = useState("")

    const alertme = () => { 
        
        alert("Name: "+name+"\nEmail: "+email+"\nUsername: "+username+"\nDob: "+dob)

     }
    function setState(e){  
        switch (e.target.id) {
            case "name":
            setName(e.target.value)
            break;
            case "email":
            setEmail(e.target.value)
            break; case "username":
            setUsername(e.target.value)
            break;  
            default:
            setDob(e.target.value)
            break;
        }
        
    } 
    
  return (
    <div>
      
      <Input id="name" placeholder="Name" type="text" onChange={(event)=>setState(event)}/><br/>
      <Input id="email"  placeholder="Email" type="email"  onChange={(event)=>setState(event)}/><br/>
      <Input id="username"  placeholder="Username" type="text"  onChange={(event)=>setState(event)}/><br/>
      <Input  id="dob" placeholder="dob" type="date"  onChange={(event)=>setState(event)}/><br/> 
    <button onClick={alertme}>Click me</button>
    </div>
  )
}

export default OnChange