import React from "react";
import { StyledCard } from "./wearhercard.styled";
import { Link } from "react-router-dom";
import Animatedweather from "./animatedweather";
import CustomButton from "../customButton/customButton";

function WeatherCard({ location, isSaveCity }) {
  return (
    <>
      <StyledCard>
        <Link style={{ textDecoration: "none" }} to={`/${location.id}`}>
          <Animatedweather location={location} />
          {/* <img
        src={`http://openweathermap.org/img/wn/${location.weather[0].icon}.png`}
      /> */}
          {/* <h3>TEMPORTURE {location.main.temp}</h3> */}
          <h3>FEELS LIKE {location.main.feels_like} ℃</h3>
          <h3>TEMP {location.main.temp} ℃</h3>
        </Link>
        {isSaveCity ? (
          <CustomButton isSaveCity={true} location={location}>
            REMOVE
          </CustomButton>
        ) : (
          <CustomButton location={location}>SAVE</CustomButton>
        )}
      </StyledCard>
    </>
  );
}

export default WeatherCard;
