import styled from "styled-components";

export const StyledMain = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    border-radius: 10px;
    padding: 8px;
    border: none;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 0.8rem;

    input {
      padding: 5px;
    }
  }
`;
