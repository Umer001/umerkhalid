function Name() {
  const titlestyle = {
    color: "white",
    backgroundColor: "rgb(27, 20, 100)",
    padding: "1px 20px 2px 20px",
    maxWidth: "65%",
    borderBottomRightRadius: "360px",
    borderTopRightRadius: "360px",
  };
  const posstyle = {
    marginTop: "-10px",
  };
  return (
    <div style={titlestyle}>
      <h2>Muhammad Umer Khalid</h2>
      <h3 style={posstyle}>Web Developer</h3>
    </div>
  );
}

export default Name;
