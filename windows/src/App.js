import React from 'react';
import './App.css';

import Window from './components/Window';

function App() {
  return (
    <div className="App">
        <h1>Desktop</h1>
      <Window title="Test Window">
        <h3>Test</h3>
      </Window>
    </div>
  );
}

export default App;
