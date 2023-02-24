import styled from "styled-components";

export const GenderContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const GenderBox = styled.div`
  background-color: ${(props) => props.color};
  width: calc(100% / 7);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  cursor: pointer;
  :hover {
    width: 18%;
    font-size: 36px;
    text-shadow: #b20056 1px 0 10px;
  }
  transition: all 0.5s ease;
  h3 {
    position: absolute;
    z-index: 1;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;
