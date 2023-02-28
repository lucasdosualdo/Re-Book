import styled from "styled-components";
import library from "../../assets/images/library.jpg";

export const Background = styled.div`
  background-image: linear-gradient(to bottom, transparent, #021323),
    url(${library});
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 50%;
    height: 70px;
    background-color: white;
    border-radius: 50px;
    box-shadow: 0 10px 20px rgba(255, 0, 110, 0.3),
      0 6px 6px rgba(204, 204, 204, 0.3);
    position: relative;
    display: flex;
    align-items: center;
    input {
      background-color: rgb(204, 204, 204);
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 50px;
      padding-left: 30px;
      font-size: 20px;
      :focus {
        outline: none;
      }
      &::placeholder {
        color: #898989;
      }
    }
    .search-icon {
      position: absolute;
      right: 30px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #021323;
  padding: 70px 0 0 20px;

  h1 {
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 40px;
    color: #ff006e;
    margin: 20px 10px 0 10px;
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-wrap: wrap;
  button {
    background-color: red;
    margin-right: 10px;
    color: white;
  }
`;
