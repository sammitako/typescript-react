import React from "react";

// prop 설정
type GreetingsProps = {
  name: string;
  mark?: string;
};

// component 설정
const Greetings: React.FC<GreetingsProps> = ({ name, mark = "!" }) => {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
};

export default Greetings;
