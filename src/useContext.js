import React, { useState, useEffect } from "react";
import axios from "axios";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [location, setLocation] = useState({});
  const [savedCity, setSavedCity] = useState([]);

  const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather/",
    params: {
      appid: "c464608a0909ecb7b521f7e1cde53200",
      units: "metric"
    }
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSucces);
    api
      .get("/", {
        params: {
          lat: latitude,
          lon: longitude
        }
      })
      .then(data => {
        setLocation(data.data);
      })
      .catch(error => {
        console.log("error");
      });
  }, [latitude, longitude]);

  function saveCity(newitem) {
    const savedValue = savedCity.filter(item => item.id === newitem.id);
    if (savedValue.length === 0) {
      setSavedCity(prevPhoto => [...prevPhoto, newitem]);
    }
  }

  function removeCity(newitem) {
    setSavedCity(prevItems => prevItems.filter(item => item.id !== newitem.id));
  }

  function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setlatitude(latitude);
    setlongitude(longitude);
  }

  return (
    <Context.Provider
      value={{
        location,
        longitude,
        latitude,
        saveCity,
        savedCity,
        removeCity
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
