import { useState } from "react";

export const Button = () => {
  // let someData = 10;

  const [number, setNumber] = useState(0);
  console.log(number);
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Aumentar Variavel</button>
      <button onClick={() => setNumber(number - 1)}>Diminuir Variavel</button>
      <button onClick={() => setNumber(number == 20)}>Resetar Variavel</button>
    </>
  );
};
