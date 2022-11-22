import GrandChild from "./GrandChild";

function Child(props) {
  const ChildStyle = {
    border: "2px Solid Green",
    justifyContent: "center",
    marginRight: "15px",
    maxWidth: "180px",
  };
  return (
    <div className="child">
      <ul style={ChildStyle}>
        <li>Name: {props?.name ?? "Unknown"}</li>
        <li>Age: {props?.age ?? "Unknown"}</li>
        <li>Phone: {props?.phone ?? "Unknown"}</li>
      </ul>
      <div className="grand-child" style={{ display: "flex" }}>
        {props?.grandKids?.map((kid) => (
          <GrandChild name={kid.name} age={kid.age} phone={kid.phone} />
        ))}
      </div>
    </div>
  );
}
export default Child;
