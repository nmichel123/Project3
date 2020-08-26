import React from "react";
import "./style.css";
function MatchCardBtn(props) {
  return (
    <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export default MatchCardBtn;
