import "./App.css";

function App({ name, tt }) {
  const imgUrl = `https://unavatar.io/${name}`;
  return (
    <div className="App">
      <article>
        <header>
          <img src={imgUrl} />
          <div>
            <strong>{name}</strong>
            <span>{tt}</span>
          </div>
        </header>
        <aside>
          <button>Seguir</button>
        </aside>
      </article>
    </div>
  );
}

export default App;
