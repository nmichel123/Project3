import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card"
import ProfilePic from "../components/ProfilePic/index";


class Match extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  componentDidMount() {
    this.loadNextFight();
  }

  handleBtnClick = event => {
    
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    
    
    const newState = { ...this.state };

    if (btnType === "pick") {
      
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
     
      newState.match = false;
    }
   
    this.setState(newState);
    this.loadNextFight();
  };

  loadNextFight = () => {
    API.getFight(Math.floor((2 ** 32) * Math.random()))
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Fight!
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          Made friends with {this.state.matchCount} pups so far!
        </h1>
      </div>
    );
  }
}

export default Match;