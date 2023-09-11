import React from "react";
import "../styles.css";
import CloudICon from "../images/CloudICon.svg";
import moment from "moment";
import { CardSlider } from "./CardSlider.js";

const DayCards = ({ dailyData }) => {
  function getDayName(dt) {
    let newDate = new Date();
    const weekday = dt * 1000;
    return newDate.setTime(weekday);
  }

  return (
    <>
      <CardSlider dailyData = {dailyData} />
    </>
  );
};

export default DayCards;
