

function Card(props) {
    const cardstyle = `card card-${props.color}`
  return (
    <div className={cardstyle}>
        <strong>{props.title}: </strong>
        <span>Rs. {props.amount}</span>

    </div>
  )
}

export default Card