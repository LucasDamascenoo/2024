import { Button } from "./components/Button";
import { WelcomeText } from "./WelcomeText";

export { react } from "react";
export { Button } from "./components/Button";
export { WelcomeText } from "./WelcomeText";

function App() {
  let name = "Lucas";
  const user = " ";

  const fruits = ["🍌", "🍎", "🍉", "🍍", "🍋"];

  return (
    <>
      <h1>Hola {name}</h1>
      <p>Vamo aprender essa porra na marra</p>

      <WelcomeText user={user} />

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
