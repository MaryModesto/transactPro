import { useState } from "react";
import NavBar from "./components/NavBar";
import FirstPart from "./components/FirstPart";
import SecondPart from "./components/SecondPart";
import SignUpPart from "./components/SignUpPart";
import LogoFooter from "./components/LogoFooter";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <FirstPart />
      <SecondPart />
      <SignUpPart />
      <LogoFooter />
    </>
  );
}

export default App;
