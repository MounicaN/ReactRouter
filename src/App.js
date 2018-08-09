import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { App as Todo } from "./src1/App";
import  Todo  from './Todo';
import RSS from './rss';
// import './Todo.css';
// import './rss.css';
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Task1">Task1</Link>
        </li>
        <li>
          <Link to="/Task2" >Task2</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/Task1" component={Task1} />
      <Route path="/Task2" component={Task2} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const Task1 = () => (
  <div>
    <h1><Todo/></h1>
  </div>
);

const Task2 = () => (
  <div>
    <h1><RSS/></h1>
  </div>
);

export default BasicExample;