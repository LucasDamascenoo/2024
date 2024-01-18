export { react } from "react";

function App() {
  let name = "Lucas";
  const user = true;
  return (
    <>
      <h1>Hola {name}</h1>
      <p>Vamo aprender essa porra na marra</p>
      {user ? "online" : "desonline"}
    </>
  );
}

export default App;
