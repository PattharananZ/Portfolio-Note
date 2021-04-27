import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Mywork from "./pages/Mywork";
import Mywork1 from "./pages/Mywork1";
import Mywork2 from "./pages/Mywork2";
import Mywork3 from "./pages/Mywork3";
import Mywork4 from "./pages/Mywork4";
import Mywork5 from "./pages/Mywork5";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/mywork">
          <Mywork />
        </Route>
        <Route path="/mywork-unreal">
          <Mywork1 />
        </Route>
        <Route path="/mywork-maya">
          <Mywork2 />
        </Route>
        <Route path="/mywork-zbrush">
          <Mywork3 />
        </Route>
        <Route path="/mywork-substance-painter">
          <Mywork4 />
        </Route>
        <Route path="/mywork-vscode">
          <Mywork5 />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
