import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import {
  Wrapper,
  TopContainer,
  Title,
  Branding,
  AuthContainer,
  New,
  Authform,
  Authbutton,
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
      <AuthContainer>
        <Authform>
          <input type="email" name="email" placeholder="e-mail" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <Authbutton>Entrar</Authbutton>
          <Link to={`/signup`}>
            <New>Primeira vez? Clique aqui para criar uma conta!</New>
          </Link>
        </Authform>
      </AuthContainer>
    </Wrapper>
  );
}
