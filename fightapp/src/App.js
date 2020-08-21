import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Wrapper>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/match" component={MatchMaking} />
      </Wrapper>
    </Router>
  );
}

export default App;
