import Child from "./Child";

function Parent(props) {
  const style = {
    border: "2px solid blue",
    maxWidth: 230,
    margin: "0 auto",
  };
  return (
    <div className="family">
      <div className="parent">
        <ul style={style}>
          <li>Father Name: {props?.fatherName ?? "Unknown"}</li>
          <li>Mother Name: {props?.motherName ?? "Unknown"}</li>
          <li>Children: {props?.children ?? "Unknown"}</li>
          <li>City: {props?.city ?? "Unknown"}</li>
        </ul>
        <div
          className="children"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {props.kids.map((kid) => (
            <Child
              name={kid.name}
              age={kid.age}
              phone={kid.phone}
              grandKids={kid.grandKids}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Parent;
