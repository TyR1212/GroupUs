import React, { useState, useEffect } from "react";
import CardOptions from "./CardOptions";

const Card = ({ user }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(document.getElementById(user.id.toString()).clientHeight);
  }, [])

  const mouseOutHandler = () => {
    setOptionsVisible(false);
  };
  const clickHandler = () => {
    setOptionsVisible(true);
  };

  return (
    <div>
      {optionsVisible && (
        <div className="card-container">
          <div className={`card card-selected-hover ${user.groupId === -1 ? "card-ungrouped" : ""}`} style={{height: height}} onMouseLeave={mouseOutHandler}>
            <div className="pic-container">
              <img
                src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg"
                height="75"
                width="75"
              />
            </div>
            <CardOptions user={user} />
          </div>
        </div>
      )}

      {!optionsVisible && (
        <div className="card-container">
          <div id={user.id} className={`card card-hover ${user.groupId === -1 ? "card-ungrouped" : ""}`} onClick={clickHandler}>
            <div className="pic-container">
              <img
                src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg"
                height="75"
                width="75"
              />
            </div>
            <h2>{user.name}</h2>
            <p>{user.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
