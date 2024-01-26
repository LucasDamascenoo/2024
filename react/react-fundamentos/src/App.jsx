import { Button } from "./components/Button";
import { Events } from "./components/Events";
import { WelcomeText } from "./WelcomeText";

export { react } from "react";

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

      <Events />
      <Button />
    </>
  );
}

export default App;
