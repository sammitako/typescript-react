import React from "react";
import FunctionalGreetings from "./FunctionalGreetings";
import Greetings from "./Greetings";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };
  return (
    <>
      <Greetings name="SAM" />
      <FunctionalGreetings name="SEAN" onClick={onClick} />
    </>
  );
}

export default App;
