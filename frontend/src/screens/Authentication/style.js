import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  @media (min-width: 614px) {
    display: flex;
  }
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
  width: 100%;
  @media (min-width: 614px) {
    height: 100%;
    width: 60%;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 76px;
  line-height: 84px;
  letter-spacing: 0.08em;

  color: #ff006e;
  font-family: "Anton", sans-serif;
  margin-bottom: 20px;
  p {
    font-style: italic;
    font-family: "Lato", sans-serif;
    letter-spacing: 0.01em;
    display: inline;
    color: #ffffff;
  }

  @media (max-width: 614px) {
    font-size: 40px;
    margin-bottom: 0;
  }
`;
export const Branding = styled.div`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 23px;
  color: #ffffff;
  display: flex;
  justify-content: center;

  img {
    width: 60%;
  }
  @media (max-width: 614px) {
    img {
      width: 100%;
      height: 15vh;
    }
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 5vh 0;
  background-color: #333333;
  height: 70%;
  @media (min-width: 614px) {
    height: 100%;
    width: 40%;

    justify-content: center;
  }
`;
export const New = styled.p`
  a {
    text-decoration: none;
  }
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  text-decoration-line: underline;
  color: #ffffff;
`;
export const Loginform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  input {
    width: 85%;
    height: 55px;
    margin-bottom: 6px;
    border: solid 1px #d5d5d5;
    font-weight: 400;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    padding: 15px;
    border-radius: 6px;
    margin-bottom: 15px;
    ::placeholder {
      color: #9f9f9f;
    }
  }
`;
export const Loginbutton = styled.button`
  height: 55px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1877f2;
  border: none;
  border-radius: 6px;
  font-size: 21px;
  font-family: "Raleway", sans-serif;
  color: #ffffff;
  margin-bottom: 25px;
  opacity: ${(props) => (props.bluur ? 0.5 : 1)};
`;
