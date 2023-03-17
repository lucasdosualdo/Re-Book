import styled from "styled-components";
import { IoClose, IoCloudUploadOutline } from "react-icons/io5";

export const CloseProfile = styled(IoClose)`
  position: fixed;
  top: 200px;
  right: 30vw;
  font-size: 50px;
  color: var(--white-color);
  cursor: pointer;
  :hover {
    color: var(--pink-color);
  }
  @media (max-width: 650px) {
    right: 20vw;
  }
`;

export const UploadImage = styled(IoCloudUploadOutline)`
  color: white;
  font-size: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
  cursor: pointer;
  z-index: -1;
  :hover {
     z-index: 2;
  }
`;
