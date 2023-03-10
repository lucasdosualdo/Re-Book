import styled from "styled-components";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const BookContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  padding-left: 10vw;
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
  color: var(--gray-color);
  font-size: 60px;
  position: absolute;
  top: 25px;
  left: 25px;
  :hover {
    color: var(--pink-color);
  }
  @media (max-width: 650px) {
    left: 10vw;
  }
`;

export const CommentsContainer = styled.div`
  //background-color: red;
  width: 90vw;
  height: 500px;
  padding-left: 10vw;
  padding-top: 5vh;
  position: relative;
  h1 {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 28px;
    color: var(--white-color);
  }
  p {
    font-size: 18px;
  }
  h6 {
    font-size: 18px;
    color: var(--white-color);
    position: absolute;
    right: 0;
  }
`;

export const Divider = styled.div`
  background-color: var(--gray-color);
  width: 100%;
  height: 2px;
  margin: 25px 0;
`;

export const CommentBox = styled.div`
  position: relative;
  //background-color: green;
  width: 100%;
  display: flex;
  height: auto;

  textarea {
    margin-left: 10px;
    min-width: 70%;
    max-width: 100%;
    min-height: 80px;
    max-height: 200px;
    background-color: #151515;
    font-size: 18px;
    overflow-y: scroll;
    padding: 10px;
    border-radius: 5px;
    word-wrap: break-word;
    color: var(--gray-color);
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #333333;
      border-radius: 5px;
    }

    @media (max-width: 650px) {
      width: 100%;
    }
  }

  button {
    background-color: var(--gray-color);
    height: 35px;
    color: var(--pink-color);
    font-size: 16px;

    margin-top: auto;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    :hover {
      background-color: var(--pink-color);
      color: var(--gray-color);
      font-weight: 700;
    }

    @media (max-width: 650px) {
      margin-top: 0;
      position: absolute;
      bottom: 0;
      margin-left: 0;
      height: 25px;

      font-size: 12px;
    }
  }

  .like-icon {
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
`;

export const ProfileImage = styled.img`
  width: 5vw;
  height: 5vw;
  border-radius: 100%;
  object-fit: cover;
  @media (max-width: 1050px) {
    width: 7vw;
    height: 7vw;
  }

  @media (max-width: 650px) {
    width: 10vw;
    height: 10vw;
  }
`;

export const Comment = styled.div`
  //background-color: red;
  width: 100%;
  height: auto;
  padding: 0 10px 10px 10px;
  color: var(--gray-color);
  position: relative;
  p {
    word-wrap: break-word;

    @media (max-width: 650px) {
      font-size: 14px;
    }
  }
  @media (max-width: 650px) {
    width: 90%;
  }

  h3 {
    color: var(--pink-color);
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 5px;
  }

  h5 {
    color: var(--gray-color);
    font-size: 14px;
    position: absolute;
    top: 0;
    right: 0;
    @media (max-width: 650px) {
      font-size: 12px;
    }
  }
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  h3 {
    color: var(--gray-color);
    font-size: 14px;
    @media (max-width: 650px) {
      font-size: 12px;
    }
  }
`;
