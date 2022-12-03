

function Expense(props) {
    
  return (
    <tr id={`row-${props.id}`}>
    <td className="expense-title">{props.title} </td>
    <td className="expense-amount">  <span className="amount">Rs. {props.amount}</span> <button onClick={props.remove} className="close-btn">X</button></td>
 
  </tr>
     
  )
}

export default Expense