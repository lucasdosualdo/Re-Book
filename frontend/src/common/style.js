import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15vw;
  @media (max-width: 950px) {
    right: 35vw;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 5vw;
  color: var(--gray-color);
  gap: 10px;

  img {
    width: 5vh;
    height: 5vh;
    border-radius: 100%;
    object-fit: cover;
  }

  @media (max-width: 950px) {
    right: 75px;
  }
`;

export const LogOutArrow = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;
