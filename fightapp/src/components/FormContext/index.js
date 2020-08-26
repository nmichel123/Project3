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
  handleInputChange: () => {}
});

export default FighterContext;
