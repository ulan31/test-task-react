import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
              <Route exact path="/" component={ StepOne }/>
              <Route path="/step2" component={ StepTwo }/>
              <Route path="/step3" component={ StepThree }/>
              <Route path="/result" component={ Result }/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
