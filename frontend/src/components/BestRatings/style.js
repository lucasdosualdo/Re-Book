import styled from "styled-components";

export const Title = styled.h3`
  margin: 40px 0 0 10px;
  color: #ff006e;
  font-weight: 700;
  font-size: 44px;
`;

export const OverflowMaker = styled.div`
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: ${(props) => props.size}px;
  margin-left: ${(props) => props.pass}px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  transition: all ease 0.5s;
`;

export const ViewLeft = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.7);
  color: white;
  font-size: 50px;
  width: 40px;
  height: 100px;
  border-radius: 0 15px 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewRight = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.7);
  color: white;
  font-size: 50px;
  width: 40px;
  height: 100px;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookBox = styled.div`
  margin-right: 20px;
  //width: calc(100vw / 7);
  //min-width: calc(1000px / 7);
  display: inline-block;
  width: 250px;
  padding-top: calc(1.45);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  transition: all 0.4s ease;
  :hover {
    transform: scale(1.05);
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  > div {
    padding: 10px;
    color: #cccccc;

    height: 20px;
    background-color: rgb(0, 17, 33, 0.5);
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
    border-radius: 0 0 10px 10px;
    h3 {
      font-size: 25px;
      font-weight: 700;
    }
    h4 {
      margin-top: 5px;
      font-size: 18px;
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  h5 {
    font-size: 25px;
    font-weight: 700;
    margin-left: 3px;
  }
  .star-icon {
    width: 25px;
    height: 25px;
  }
`;
