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
import { postLogin } from "../../../services/signinApi";
import { useAuth } from "../../../contexts/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signin() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSignin(e) {
    e.preventDefault();
    setLoading(true);
    const body = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    try {
      const promise = await postLogin(body);
      setUser({
        username: promise.data.user.name,
        email: promise.data.user.email,
        id: promise.data.user.id,
        token: promise.data.token,
      });
      setLoading(false);
      toast.success("Sucesso", {
        progressStyle: {
          backgroundColor: "var(--pink-color)",
        },
      });
    } catch (error) {
      toast.error("Erro", {
        progressStyle: {
          backgroundColor: "var(--pink-color)",
        },
      });
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
        <Authform onSubmit={handleSignin}>
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
          <Authbutton isLoading={loading} disabled={loading}>
            {!loading && "Entrar"}
            <ClipLoader
              color={"var(--white-color)"}
              loading={loading}
              speedMultiplier={0.7}
            />
          </Authbutton>
          <Link to={`/signup`}>
            <New>Primeira vez? Clique aqui para criar uma conta!</New>
          </Link>
        </Authform>
      </AuthContainer>
      <ToastContainer
        transition={Slide}
        autoClose={1500}
        bodyClassName="toast-body"
        icon={false}
      />
    </Wrapper>
  );
}
