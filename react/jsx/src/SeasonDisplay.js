import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  winter: {
    text: "Quente",
    iconName: "snowflake"
  },
  summer: {
    text: "Frio",
    iconName: "hot"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 8) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  var season = getSeason(props.lat, new Date().getMonth());
  return (
    <div>
      <i className={`icon-left icon ${seasonConfig[season]}`} />
      <div className="season-display">Latitude: 123</div>
    </div>
  );
};

export default SeasonDisplay;
