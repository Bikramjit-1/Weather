import styled from "styled-components";

export const StyledCard = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  transition: all 0.3s cubic-bezier(0.5, 2, 0.25, 1);
  margin: 20px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.primaryLight};
  padding: 20px 50px;

  &:hover {
    transform: translateY(-5px);
  }
  h2 {
    margin: 0;
    padding: 5px;
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryDark};
    margin: 20px 0;
  }
  h3 {
    width: 100%;
    padding: 2px;
    margin: 5px;
    color: ${({ theme }) => theme.primaryDark};
    border-radius: 10px;
    font-size: 1.3rem;
    margin: 10px 0;
  }
  img {
    width: 50px;
  }
  @media screen and (max-width: 700px) {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;
