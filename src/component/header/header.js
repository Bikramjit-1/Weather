import React from "react";
import { HeaderDetail } from "./header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <HeaderDetail>
        <h1>WEATHERS</h1>
      </HeaderDetail>
    </Link>
  );
};

export default Header;
