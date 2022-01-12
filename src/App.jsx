import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="Bienvenidos"></ItemListContainer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Pet shop of horrors </p>{" "}
        <a
          className="App-link"
          href="
        https: //www.coderhouse.com/
        "
          target="_blank"
          rel="noopener noreferrer"
        >
          CoderHouse{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
