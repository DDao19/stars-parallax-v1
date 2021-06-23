import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <section className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <h1>
          Hi, My name is <span>Dung Dao</span>
        </h1>
        <br />
        <h1>
          I'm a <span>Web Developer</span>
        </h1>
        <div className="btn_about">
          <Button variant="outline-info">About Me</Button>
        </div>
      </div>
    </section>
  );
}

export default App;
