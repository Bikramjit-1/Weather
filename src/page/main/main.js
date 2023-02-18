import React, { useContext } from "react";
import "./main.css";
import { Context } from "../../useContext";
import WeatherCard from "../../component/weatherCard/weathercard";
export default function Main() {
  const { location, latitude, longitude } = useContext(Context);
  console.log(location);

  return (
    <>
      <h1> WEATHER TODAY</h1>
      {location.main && location.main.temp && latitude && longitude ? (
        <WeatherCard location={location} />
      ) : (
        false
      )}
    </>
  );
}
