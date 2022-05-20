import { useState } from "react";
import "./App.css";

import Heading from "../src/Modules/UI/Heading.js";
import PageNumber from "./Modules/UI/PageNumber";
import WelcomePage from "./Modules/Welcome/WelcomePage";
import PlanningPage from "./Modules/Planning/PlanningPage";
import SetupPage from "./Modules/Setup/SetupPage";
import CongratsPage from "./Modules/Congrats/CongratsPage";
const App = () => {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");

  function updateName(newName) {
    setName(newName);
  }
  function changeCounter() {
    setCounter((prevCount) => (prevCount = prevCount + 1));
  }

  return (
    <div className="App">
      <Heading />
      <PageNumber counter={counter - 1} />
      {counter === 1 && <WelcomePage updateCounter={changeCounter} updateName={updateName}/>}
      {counter === 2 && <SetupPage updateCounter={changeCounter} />}
      {counter === 3 && <PlanningPage updateCounter={changeCounter} />}
      {counter === 4 && <CongratsPage name={name}/>}
    </div>
  );
};

export default App;
