import styled from "styled-components";

export const ButtonDetail = styled.button`
  font-size: 1.2em;
  background-color: #fff;
  padding: 10px 20px;
  text-align: center;
  border-radius: 10px;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(1, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
