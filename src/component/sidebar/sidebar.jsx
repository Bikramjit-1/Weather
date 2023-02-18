import React from "react";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
const Menu = ({ toggle }) => {
  return (
    <StyledMenu toggle={toggle}>
      <Link to="/" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="HOME" />
        HOME
      </Link>
      <Link to="/add" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="SEARCH" />
        SEARCH
      </Link>
      <Link to="/detail" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="DETAIL" />
        SAVED
      </Link>
      <Link to="/" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="LOGIN" />
        LOGIN
      </Link>
    </StyledMenu>
  );
};
export default Menu;
