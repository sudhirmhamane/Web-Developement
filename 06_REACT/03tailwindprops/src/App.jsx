import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card userName="Sudhir" post="Software Developer at Google" />
    </>
  );
}

export default App;
