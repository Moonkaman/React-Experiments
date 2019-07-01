import React from "react";
import "./App.css";

import Canvas from "./Canvas";

function App(props) {
  return (
    <Canvas>
      <h1>Test</h1>
      <div>
        <img src={props.src} />
      </div>
    </Canvas>
  );
}

export default App;
