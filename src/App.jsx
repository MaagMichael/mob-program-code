import "./App.css";
import { useState } from "react";

function App() {

  const [display, setDisplay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.abc.value);
    setDisplay(e.target.abc.value);
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="abc" id="abc" />
        <button type="submit">Submit</button>
      </form>{" "}
      <h1>{display}</h1>
    </div>
  );
}
export default App;
