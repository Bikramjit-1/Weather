import styled from "styled-components";

export const SwicthStyled = styled.span`
  label {
    padding: 0;
    * {
      vertical-align: middle;
    }
    input {
      display: none;
      :checked + span small {
        background-color: cornflowerblue;
        border-color: cornflowerblue;
        left: 40%;
      }
    }

    input + span {
      position: relative;
      display: inline-block;
      margin-right: 10px;
      width: 75px;
      height: 40px;
      background-color: #fff;
      border-radius: 50px;
      border: 1px solid #eee;
      cursor: pointer;
      small {
        position: absolute;
        left: 0;
        width: 60%;
        height: 100%;
        background-color: #c1c1c1;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;
