import React from "react";
import "./App.css";
import Button from "./components/button/button";

function App() {
  return (
    <div data-testid="app" className="App">
      <Button onClick={() => console.log("clicked")} label="Click me please" />
    </div>
  );
}

export default App;
