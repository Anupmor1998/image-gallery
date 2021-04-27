import React from "react";

import LogOut from "../LogOut/LogOut";

import "./Title.css";
function Title() {
  return (
    <div className="title">
      <div className="title-block">
        <h1>ImaGram</h1>
        <LogOut />
      </div>
      <h2>Your Images</h2>
    </div>
  );
}

export default Title;
