
function User(props) {
    const { name:myname, age:myage, education:{degree:{course:{value:mydegree}}},address:{country: { value:mycountry ,city:{value:mycity,street:{value:mysteet}} }}} = props.user;
  const newobj={...props.user};
  newobj.name="Umer";
    return (   
  <p> 
      My name is  {myname}. My age is {myage}. I have completed my {mydegree} in 2018. I live in {mysteet}  {mycity}. {mycountry}.
   </p>
   );
 }
    
 export default User;