import React from "react";
import "../styles.css";
import ClockIcon from '../images/ClockIcon.svg';

const DetailDayCard = () => {
  return(
    <>
      <div className="dayCardSunrise">
        <div className="textStyle">sunrise</div>
        <div className="clockCard">
          <img src={ClockIcon} className="CloudStyle"/>
          <div className="cardDetails">11:24</div>
        </div>
      </div>

      <div className="dayCardNoon">
        <div className="textStyle">Golden Hour</div>
        <div className="clockCard">
          <img src={ClockIcon} className="CloudStyle"/>
          <div className="cardDetails">6:00</div>
        </div>
      </div>

      <div className="sunset">
        <div className="textStyle">Sunset</div>
        <div className="clockCard">
          <img src={ClockIcon} className="CloudStyle"/>
          <div className="cardDetails">7:21</div>
        </div>
      </div>
    </>
  )
}

export default DetailDayCard;