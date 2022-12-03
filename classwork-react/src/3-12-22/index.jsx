 
import { useState } from 'react'
import { useEffect } from 'react'
const FetchUsers =()=> {
const [state,setState]=useState([])
useEffect(()=>{

    setTimeout(()=>{
        getUserData();
    })
}  ,[])

const getUserData= async()=>{

try{
    const response =await fetch("https://jsonplaceholder.typicode.com/USERS/")
    const data =await response.json();
    setState(data)
}
catch(error){
console.log(error.message())
}

}
  return (
    <div>
        {
state.length>0?(


state.map((user)=>{
    console.log(user);
return<div>
    <p>Username: {user.name}</p>
    
</div>
})
 

):(<p>Loading...</p>)


        }




    </div>
  )
}

export default FetchUsers