import logo from './logo.svg';
import './App.css';
import Todos from "./Todos";
import Todos1 from "./Todos1";
import Todos2 from "./Todos2";
import Counter from "./Counter";
function App() {
  return (
    <div className="App">
      {/* <Todos /> */}
      <Counter />
      <Todos1 />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
