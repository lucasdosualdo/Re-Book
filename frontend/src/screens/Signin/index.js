import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

export default function Signin() {
  return (
    <Wrapper>
      <TopContainer>
        <div>
          <Title>linkr</Title>
          <Branding>
            save, share and discover <br></br> the best links on the web
          </Branding>
        </div>
      </TopContainer>
      <LoginContainer>
        <Loginform>
          <input
            type="email"
            name="email"
            placeholder="e-mail"
            // disabled={isDisable}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            // disabled={isDisable}
            required
          />
          <Loginbutton>{/* {load} */}</Loginbutton>
          <Link to={`/signup`}>
            <New>First time? Create an account!</New>
          </Link>
        </Loginform>
      </LoginContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  @media (min-width: 614px) {
    display: flex;
  }
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 26%;
  width: 100%;
  background-color: #151515;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (min-width: 614px) {
    height: 100%;
    width: 60%;
    div {
      align-items: flex-start;
    }
  }
`;
const Title = styled.div`
  font-family: "Passion One", cursive;
  font-weight: 700;
  font-size: 76px;
  line-height: 84px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;
const Branding = styled.div`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 23px;
  color: #ffffff;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 8%;
  background-color: #333333;

  @media (min-width: 614px) {
    height: 100%;
    width: 40%;
    margin-top: 0;
    justify-content: center;
  }
`;
const New = styled.p`
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
const Loginform = styled.form`
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
const Loginbutton = styled.button`
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
