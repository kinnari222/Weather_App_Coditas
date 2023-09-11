import React from "react";
import DayCards from "./DayCards";
import "../styles.css";
import WeatherIcon from "../images/WeatherIcon.svg";
import windDirectionIcon from "../images/windDirectionIcon.svg";
import HumidityIcon from "../images/HumidityIcon.svg";
import RainIcon from "../images/RainIcon.svg";
import moment from "moment";

const LeftContainer = ({ weeklyData, dailyData }) => {
  function getDayName(dt) {
    let newDate = new Date();
    const weekday = dt * 1000;
    return newDate.setTime(weekday);
  }

  return (
    <div className="left-side">
      <img src={WeatherIcon} alt="Weather Icon" className="weatherStyle" />
      <div className="degreeMainStyle">
        <div className="tempStyle">{weeklyData?.main?.temp}</div>
        <div className="degreeStyle">
          &deg; <sup>C</sup>
        </div>
      </div>

      <div className="dateStyle">{moment().format("DD/MM/YY")}</div>
      <div className="dayStyle">
        {moment(getDayName(weeklyData?.dt)).format("dddd")} &nbsp; | &nbsp;{" "}
        {moment().format("LT")}
      </div>

      <div className="weatherDetailsMain">
        <img src={windDirectionIcon} alt="Wind Icon" />
        <div>
          &nbsp; Wind &nbsp; {weeklyData?.wind?.speed} km/h &nbsp; | &nbsp;
        </div>

        <img src={HumidityIcon} alt="Humidity Icon" />
        <div>
          &nbsp; Hum &nbsp; {weeklyData?.main?.humidity} % &nbsp; | &nbsp;
        </div>

        <img src={RainIcon} alt="Rain Icon" />
        <div>&nbsp; Rain {weeklyData?.rain?.["3h"]} % &nbsp; </div>
      </div>

      <div className="cardContainer">
        <DayCards dailyData={dailyData} />
      </div>
    </div>
  );
};

export default LeftContainer;
