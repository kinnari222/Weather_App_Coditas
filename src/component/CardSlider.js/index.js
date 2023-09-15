import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloudICon from "../../images/CloudICon.svg";
import moment from "moment";
import { Fragment } from "react";

export const CardSlider = ({ dailyData }) => {
  function getDayName(dt) {
    let newDate = new Date();
    const weekday = dt * 1000;
    return newDate.setTime(weekday);
  }
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <Fragment>
      <Slider {...settings} className="slider">
        {dailyData?.map((data, index) => {
          return (
            <div key={index} className="card">
              <div className="cardDetails">{data?.main?.temp} &deg;C</div>
              <img src={CloudICon} className="CloudStyle" />
              <div className="cardDetails">
                {moment(getDayName(data.dt)).format("dddd")}
              </div>
            </div>
          );
        })}
      </Slider>
    </Fragment>
  );
};
