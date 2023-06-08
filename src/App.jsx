import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Home } from "./components/Home/Home";
import { MiniCard } from "./components/MiniCard/MiniCard";
import data from "./components/data.js";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home data={data} />,
  //   },
  // ]);
  return (
    <div className="App">
      {/* <Card info={id} /> */}
      {/* <Home data={data} /> */}
    </div>
  );
}

export default App;
