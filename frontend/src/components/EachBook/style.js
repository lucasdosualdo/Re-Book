import styled from "styled-components";

export const BookBox = styled.div`
  margin: 0 20px 50px 0;
  width: 215px;

  > div {
    height: 310px;

    transition: all 0.3s ease;
    :hover {
      transform: scale(1.05);
    }
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(204, 204, 204, 0.2),
        0 6px 6px rgba(204, 204, 204, 0.2);
    }
  }
  color: var(--gray-color);

  > h3 {
    font-weight: 700;
    font-size: 16px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > h5 {
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 10px 0;
  }
`;