import React, { useContext } from "react";
import { DetailStyled } from "./Detail.styled";
import { Context } from "../../useContext";
import WeatherCard from "../../component/weatherCard/weathercard";
function Detail() {
  const { savedCity } = useContext(Context);
  console.log(savedCity);
  return (
    <DetailStyled>
      {savedCity.map(item => {
        return <WeatherCard location={item} isSaveCity={true} />;
      })}
    </DetailStyled>
  );
}

export default Detail;
