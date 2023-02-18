import React from "react";
import { SwicthStyled } from "./modeswitcher.styled";

const ModeSwitcher = () => {
  return (
    <SwicthStyled>
      <label for="switcher">
        <input type="checkbox" name="" id="swicther" />
        <span>
          <small />
        </span>
      </label>
    </SwicthStyled>
  );
};

export default ModeSwitcher;
