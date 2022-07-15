import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { Result } from "./Result";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Router>
          <Routes>
              <Route exact path="/" element={ StepOne }/>
              <Route path="/step2" element={ StepTwo }/>
              <Route path="/step3" element={ StepThree }/>
              <Route path="/result" element={ Result }/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
