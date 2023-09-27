import "./App.css";
import { useState ,useRef} from "react";

function App() {

  const [display, setDisplay] = useState("");
  const [display2, setDisplay2] = useState("");

  // event target at change in input field
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.userInput.value);
    setDisplay(e.target.userInput.value);
  }

  // useRef to read input only at click event once
  const textRef = useRef(null);

  const handleSubmit2 = (e) => {
    e.preventDefault();    
    setDisplay2(textRef.current.value);
  };
  
  return (
    <div className="App">
      {/* classic */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="userInput" />
        <button type="submit">Submit</button>
      </form>{" "}
      <h1>{display}</h1>

      {/* useRef */}
      <form onSubmit={handleSubmit2}>
        <input type="text" name="userInput" ref={textRef} />
        <button type="submit">Submit</button>
      </form>{" "}
      <h1>{display2}</h1>
    </div>
  );
}
export default App;
