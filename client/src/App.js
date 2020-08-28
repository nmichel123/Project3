import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// Importing Pages { Home, Social, Profile, Matchmaking }
import Home from "./pages/Home"
import Social from "./pages/Social"
import Profile from "./pages/Profile"
import MatchMaking from "./pages/MatchMaking"
// Importing Components { Nav, Map} but not {Profile: {Aside, Form, Header, Pic}, Stats}
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/match" component={MatchMaking} />
    </Router>
  );
}

export default App;
