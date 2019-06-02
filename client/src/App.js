import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import CreateCourse from './components/course/create/create';
import CreateList from './components/course/list/list';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <div className="con">
            <Link to={"/"}>Application Framework</Link>
          </div>
          <div className="con">
            <Link to={"/create"}>Create Course</Link>
          </div>
          <div className="con">
            <Link to={"/list"}>List Course</Link>
          </div>
        </div>
        <Switch>
          <Route path="/create" component={CreateCourse} />
          <Route path="/list" component={CreateList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
