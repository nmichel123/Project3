import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// Importing Pages { Home, Social, Profile, Matchmaking }
import Home from "./pages/Home"
import Social from "./pages/Social"
import Profile from "./pages/Profile"
import MatchMaking from "./pages/MatchMaking"
import Events from "./pages/Events"
// Importing Components { Nav, Map} but not {Profile: {Aside, Form, Header, Pic}, Stats}
import Nav from "./components/Nav"
import  FighterContext from "./components/FighterContext"

function App() {
  return (
 <FighterContext.Provider>
    <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/match" component={MatchMaking} />
    </Router>
</FighterContext.Provider>
  );
}

export default App;
