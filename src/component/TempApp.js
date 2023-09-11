import React, { useEffect, useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import "../styles.css";
import WeatherIcon from "../images/WeatherIcon.svg";

const TempApp = () => {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=526e8b238255e925fc815612823e112c&units=metric`;
      // const url = `http://api.weatherapi.com/v1/current.json?key=d6e0f4f707864b38a95123038230509&q=${search}&aqi=no`;
      const response = await fetch(url);
      const resJson = await response.json();
      setWeatherData(resJson);
    };
    fetchApi();
  }, [search]);

  const dailyData = weatherData?.list?.filter((day) =>
    day.dt_txt.includes("18:00:00")
  );

  const weeklyData = dailyData?.shift();

  console.log("weeklyData : ", weeklyData);

  return (
    <>
      <div className="mainContainer">
        <LeftContainer weeklyData={weeklyData} dailyData={dailyData} />
        <RightContainer
          weatherData={weatherData}
          search={search}
          onSearchChange={(value) => setSearch(value)}
        />
      </div>
    </>
  );
};

export default TempApp;
