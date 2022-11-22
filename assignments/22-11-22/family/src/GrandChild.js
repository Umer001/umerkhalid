function GrandChild(props) {
  const GrandChildStyle = {
    border: "2px Solid red",
    justifyContent: "center",
    marginRight: "10px",
  };
  return (
    <ul style={GrandChildStyle}>
      <li>Name: {props?.name ?? "Unknown"}</li>
      <li>Age: {props?.age ?? "Unknown"}</li>
      <li>Phone: {props?.phone ?? "Unknown"}</li>
    </ul>
  );
}
export default GrandChild;
