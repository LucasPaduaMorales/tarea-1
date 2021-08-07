import React from "react";
import "./App.css";
import Paises from "./Paises";
import Perro from "./Perro";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Paises />
          <Perro />
        </header>
      </div>
    );
  }
}

export default App;
