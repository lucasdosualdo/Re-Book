import styled from "styled-components";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  padding-left: 20vh;
  padding-top: 100px;
  @media (max-width: 1050px) {
    padding-left: 0;
    flex-direction: column;
    align-items: center;
  }
`;

export const Cover = styled.div`
  width: 20vw;
  height: calc(1.45 * 20vw);
  padding-top: calc(1.45);
  box-shadow: 0 10px 20px rgba(204, 204, 204, 0.2),
    0 6px 6px rgba(204, 204, 204, 0.2);

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1050px) {
    width: 50vw;
    height: calc(1.45 * 50vw);
    margin-bottom: 60px;
  }
  @media (max-width: 650px) {
    width: 80vw;
    height: calc(1.45 * 80vw);
  }
`;
export const Descriptions = styled.div`
  width: 50%;
  color: var(--gray-color);
  padding-left: 50px;
  h1 {
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 40px;
    color: var(--pink-color);
  }
  p {
    font-size: 18px;
    margin-bottom: 40px;
  }
  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--pink-color);
  }

  span {
    font-weight: normal;
    color: var(--gray-color);
  }

  @media (max-width: 1050px) {
    width: 80vw;
    padding-left: 0;
  }
`;

export const BackIcon = styled(IoArrowBackCircleOutline)`
  cursor: pointer;
  color: rgb(204, 204, 204);
  font-size: 60px;
  position: absolute;
  top: 25px;
  left: 25px;
  :hover {
    color: #ff006e;
  }
  @media (max-width: 650px) {
    left: 10vw;
  }
`;
