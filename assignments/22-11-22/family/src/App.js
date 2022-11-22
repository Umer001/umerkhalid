import "./App.css";
import Parent from "./Parent";

function App() {
  const family = {
    fatherName: "Khalid Mehmood",
    motherName: "Shahnaz Khalid",
    children: "2",
    city: "Faislabad",
    kids: [
      {
        name: "Irtiza Khalid",
        age: "27 Years",
        phone: "03334455605",
        grandKids: [
          {
            name: "Fatima Irtiza",
            age: "1 Years",
            phone: "03474455605",
          },
          {
            name: "Aarmish Irtiza",
            age: "2 Years",
            phone: "03474455605",
          },
        ],
      },
      {
        name: "Salman Khalid",
        age: "20 Years",
        phone: "03474455605",
      },
      {
        name: "Umer Khalid",
        age: "22 Years",
        phone: "03474455605",
        grandKids: [
          {
            name: "Ali Umer",
            age: "2 Years",
            phone: "03474455605",
          },
        ],
      },
    ],
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Family Tree</h2>
      <Parent
        fatherName={family.fatherName}
        motherName={family.motherName}
        children={family.children}
        city={family.city}
        kids={family.kids}
      />
    </>
  );
}
export default App;
