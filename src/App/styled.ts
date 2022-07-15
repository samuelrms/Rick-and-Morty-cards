import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  background: gray;

  div {
    padding: 1rem;
    border: 20px solid #000;
    border-radius: 5px;
    margin-bottom: 1rem;
    max-width: 100%;
    background: #fff;

    img {
      max-width: 100%;
      border-radius: 5px;
      border: 2px solid #000;
    }
    h1 {
      text-decoration: underline;
    }
    h2 {
      font-size: 1rem;
    }

    @media (max-width: 820px) {
      width: 80vw;
      display: flex;
      margin: 0 auto 1rem;
      flex-direction: column;
      img {
        width: 80%;
        height: 80%;
        margin: 0 auto;
      }
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 2rem;
      }
    }
    @media (max-width: 500px) {
      img {
        width: 100%;
        height: 100%;
      }
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.5rem;
        :last-child {
          font-size: 1rem;
        }
      }
    }
  }
`;
