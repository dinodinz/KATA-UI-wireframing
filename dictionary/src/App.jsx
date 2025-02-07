import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Headers from "./Components/Headerz.jsx";
import Homepage from "./Components/Homepage.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <Headers />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
