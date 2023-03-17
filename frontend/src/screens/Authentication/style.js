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
  font-size: 90px;
  line-height: 84px;
  letter-spacing: 0.08em;
  cursor: pointer;
  color: var(--pink-color);
  font-family: "Anton", sans-serif;
  margin-bottom: 20px;
  p {
    font-style: italic;
    font-family: "Lato", sans-serif;
    letter-spacing: 0.01em;
    display: inline;
    color: var(--white-color);
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
  color: var(--white-color);
  display: flex;
  justify-content: center;

  img {
    cursor: pointer;
    width: 60%;
  }
  @media (max-width: 614px) {
    img {
      width: 100%;
      height: 15vh;
    }
  }
`;
export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 5vh 0;
  background-color: var(--mid-dark-blue-color);
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
  color: var(--gray-color);
`;
export const Authform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  input {
    width: 85%;
    height: 55px;
    margin-bottom: 6px;
    border: solid 1px var(--gray-color);
    font-weight: 400;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    padding: 15px;
    border-radius: 6px;
    margin-bottom: 15px;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #898989;
    }
  }
`;
export const Authbutton = styled.button`
  height: 55px;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isLoading ? "var(--loading-pink-color)" : "var(--pink-color)"};
  border: none;
  border-radius: 6px;
  font-size: 21px;
  font-family: "Raleway", sans-serif;
  color: var(--white-color);
  margin-bottom: 25px;
  opacity: ${(props) => (props.bluur ? 0.5 : 1)};
  cursor: ${(props) => (props.isLoading ? "default" : "pointer")};
`;
