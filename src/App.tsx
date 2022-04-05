import React from "react";
import Counter from "./Counter";
import FunctionalGreetings from "./FunctionalGreetings";
import Greetings from "./Greetings";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Greetings name="SAM" />
      <FunctionalGreetings name="SEAN" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </>
  );
}

export default App;
