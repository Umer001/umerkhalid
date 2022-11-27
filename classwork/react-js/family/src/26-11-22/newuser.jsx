
import InnerUser from "./inneruser";
const NewUser=(props) =>{
     
    return ( 
        
  <p> 
      <InnerUser name={props.name}></InnerUser>
   </p>
   );
 }
    
 export default NewUser;