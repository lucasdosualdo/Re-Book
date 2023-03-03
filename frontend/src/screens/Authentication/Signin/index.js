import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import {
  Wrapper,
  TopContainer,
  Title,
  Branding,
  LoginContainer,
  New,
  Loginform,
  Loginbutton,
} from "../style";
import rebook from "../../../assets/images/rebook-grey.svg";

export default function Signin() {
  return (
    <Wrapper>
      <TopContainer>
        <Title>
          Re<p>-Book</p>
        </Title>
        <Branding>
          <img src={rebook} alt="Re-Book" />
        </Branding>
      </TopContainer>
      <LoginContainer>
        <Loginform>
          <input type="email" name="email" placeholder="e-mail" required />
          <input
            type="password"
            name="password"
            placeholder="password"
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
