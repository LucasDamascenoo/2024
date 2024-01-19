import { Button } from "./Button";

export { react } from "react";
export { Button } from "./Button";

function App() {
  let name = "Lucas";
  const user = true;

  const fruits = ["🍌", "🍎", "🍉", "🍍", "🍋"];

  return (
    <>
      <h1>Hola {name}</h1>
      <p>Vamo aprender essa porra na marra</p>
      {user ? "online" : "desonline"}
      <ul>
        {fruits.map((frut) => (
          <li>{frut}</li>
        ))}
      </ul>
      <Button text="soy um texto dinamico" />
      <Button text="soy outro texto dinamico" />
    </>
  );
}

export default App;
