import React, { useContext } from "react";
import { ButtonDetail } from "./customButton.styled";
import { Context } from "../../useContext";
const Button = ({ location, children, isSaveCity, ...props }) => {
  const { saveCity, removeCity } = useContext(Context);

  function handleSave(event) {
    event.stopPropagation();
    event.persist();
    saveCity(location);
  }

  function handleRemove(event) {
    event.stopPropagation();
    event.persist();
    removeCity(location);
  }

  return (
    <>
      {isSaveCity ? (
        <ButtonDetail {...props} onClick={handleRemove}>
          {children}
        </ButtonDetail>
      ) : (
        <ButtonDetail {...props} onClick={handleSave}>
          {children}
        </ButtonDetail>
      )}
    </>
  );
};

export default Button;
