import React from "react";

const FighterContext = React.createContext({
  fightId: "",
  firstName: "",
  lastName: "",
  image: "",
  stats: {
    weight: "",
    height: "",
    reach: "",
    class: ""
  },
  location: {
    latitude: "",
    longitude: ""
  },
  userCred: {
      userName: "",
      passWord: ""
  },
  handleInputChange: () => {}
});

export default FighterContext;
