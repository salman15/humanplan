import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1 className="uppercase">Coming soon</h1>
      </div>
      <a className="uppercase" href="mailto:SAGAL.LONDEN@gmail.com">
        rsvp: SAGAL.LONDEN@gmail.com
      </a>
    </div>
  );
}

export default App;
