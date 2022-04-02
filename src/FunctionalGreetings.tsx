import React from "react";

type FunctionalGreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
  children?: React.ReactNode;
};

function FunctionalGreetings({
  name,
  mark,
  optional,
  onClick,
}: FunctionalGreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

FunctionalGreetings.defaultProps = {
  mark: "!",
};

export default FunctionalGreetings;
