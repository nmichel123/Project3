import React from "react";

const FighterContext = React.createContext({
  username: '', password: '', isChecking: false, err: '', isLoggedIn: false,
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
  handleBtnClick: () => {}
});

export default FighterContext;
