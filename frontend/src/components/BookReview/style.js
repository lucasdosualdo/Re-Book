import styled from "styled-components";

export const ReviewContainer = styled.div`
  color: var(--gray-color);
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 50px;
  h1 {
    color: var(--gray-color);
  }
  span {
    margin-left: 10px;
    cursor: pointer;
    :hover {
      color: var(--pink-color);
    }
  }
`;

export const Text = styled.div`
  margin-top: 10px;
  display: flex;
  max-width: 100%;
  align-items: flex-end;
  button {
    color: var(--gray-color);
    margin-left: 10px;
    font-size: 16px;
    cursor: pointer;
    background: none;
    border: none;
    :hover {
      color: var(--pink-color);
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
  textarea {
    min-width: 300px;
    max-width: 600px;
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
      min-width: 80%;
      max-width: 100%;
    }
  }

  div {
    color: var(--gray-color);
    margin-right: 10px;
    max-width: 90%;
    white-space: pre-line;
    word-break: break-all;
    cursor: default;
    p {
      font-size: 20px;
    }
    @media (max-width: 650px) {
      max-width: 100%;
    }
  }
`;

export const SaveButton = styled.button`
  background: var(--gray-color) !important;
  color: var(--pink-color) !important;
  border-radius: 5px;
  padding: 5px 10px;
  :hover {
    color: var(--gray-color) !important;
    background: var(--pink-color) !important;
  }
`;
