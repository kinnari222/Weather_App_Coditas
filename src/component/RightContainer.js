import React, { useEffect, useState } from "react";
import DetailDayCard from "./DetailDayCard";
import "../styles.css";
import InfoIcon from "../images/InfoIcon.svg";
import Line from "../images/Line 14.svg";
import GraphIcon from "../images/GraphIcon.svg";
import SearchIcon from "@mui/icons-material/Search";

const RightContainer = ({ onSearchChange, search, weatherData }) => {
  return (
    <div className="right-side">
      <div className="wrapperSearch">
        <input
          type="Search"
          value={search}
          className="inputField"
          onChange={(event) => {
            onSearchChange(event.target.value);
          }}
        />
        <SearchIcon className="searchIcon"/>
      </div>
      
      <p>{weatherData?.location?.name}</p>

      <div className="cardContainerRight">
        <DetailDayCard />
      </div>
      
      {/* <div className="infoStyle">
        <img src={Line} />
        <img src={InfoIcon} />
      </div> */}

      <div className="graphStyle">
        <div>
          <div className="graphTextStyle">Air Quality</div>
          <img src={GraphIcon} />
        </div>

        <div>
          <div className="graphTextStyle">UV Index</div>
          <img src={GraphIcon} />
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
