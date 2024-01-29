import { Header } from "./components/Header";
import { Post } from "./components/Post";

import style from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post author={"Lucas Oliveira"} content={"teste do teste do teste"} />
          <Post author={"Tatiane Oliveira"} content={"Ja foi comprar pao?"} />
        </main>
      </div>
    </div>
  );
}

export default App;
