// import User from "./user"; 
// import NewUser from "./newuser"; 
function WelcomeUser() {
    const newuser = {
       
        name:"Admin",
        address:"Fsd",
        age:20,
        post:[
            {id:1,description:"Decrip 1"},
            {id:2,description:"Decrip 2"},
            {id:3,description:"Decrip 3"}
        ]
             
        }
    
    // const user = {
    //     id:222,
    //     name:"Admin",
    //     age:20,
    //     education:{
    //         degree:{
    //             course:{
    //                 value:"BSSC"
    //             }
    //         }
    //     },
    //     address:{
    //         country:{
    //             value:"PK",
    //             city:{
    //                 value:"Rwp",
    //                 street:{
    //                     value:14
    //                 }
    //             }
    //         }
    //     }
    // };

   return ( 
    <>
      <UserData user={newuser}/>   
      <Post posts={newuser.post}/>
     </>
    
   );
 }


 const UserData =(prop)=>{
    const {name,address,age}=prop.user;
    return(<>
       <p>Username: {name}</p>
       <p> Address: {address}</p>
       <p> Age: {age}</p>
         
        </>);
     
 }
 
 const Post =(prop)=>{
    const allposts= prop.posts;
   return ( allposts.map((val) => <p>Description: {val.description}</p>)); 
   
    } 
 
 

    export default WelcomeUser