import React from "react";
import "./App.css";
import { MapBox } from "./map";
import { Menu } from "./menu";
// import { Navigation } from "./widgets/navigation";

function App() {
  return (
    <div className="App">
      <Menu />
      <MapBox />
      {/* <Navigation /> */}
    </div>
  );
}

export default App;
