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

export default function Signup() {
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
          <input name="username" placeholder="username" required />
          <input type="email" name="email" placeholder="e-mail" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="repeat password"
            required
          />
          <Authbutton>Cadastrar</Authbutton>
          <Link to={`/signin`}>
            <New>Já possui uma conta? Clique aqui para entrar!</New>
          </Link>
        </Authform>
      </AuthContainer>
    </Wrapper>
  );
}
