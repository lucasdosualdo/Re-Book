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
import { postSignup } from "../../../services/signupApi";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from "../../../contexts/AuthContext";

export default function Signup() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    const body = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      repeatPassword: e.target[3].value,
    };
    try {
      const promise = await postSignup(body);
      console.log(promise);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

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
        <Authform onSubmit={handleSignup}>
          <input
            name="username"
            placeholder="username"
            disabled={loading}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="e-mail"
            disabled={loading}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            disabled={loading}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="repeat password"
            disabled={loading}
            required
          />
          <Authbutton>
            {!loading && "Cadastrar"}
            <ClipLoader
              color={"var(--white-color)"}
              loading={loading}
              speedMultiplier={0.7}
            />
          </Authbutton>
          <Link to={`/signin`}>
            <New>Já possui uma conta? Clique aqui para entrar!</New>
          </Link>
        </Authform>
      </AuthContainer>
    </Wrapper>
  );
}
