import { useState, useEffect } from "react";
import { IoSearch, IoClose, IoCaretDown, IoCaretUp } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import SearchBar from "../components/SearchBar";
import { CSSTransition } from "react-transition-group";
import { useLocation, useNavigate } from "react-router-dom";
import { useBooks } from "../contexts/BooksContext";
import { useIndexes } from "../contexts/IndexesContext";
import romance from "../assets/images/romance.png";
import { SearchContainer, Profile, LogOutArrow } from "./style";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const { setBooks, setSearchTerm } = useBooks();
  const { setIndexes } = useIndexes();
  const { pathname } = useLocation();
  const { user, token, logout } = useAuth();
  const isSigninOrSignup = pathname === "/signin" || pathname === "/signup";

  useEffect(() => {
    if (isSigninOrSignup) {
      document.body.classList.add("no-header");
      document.body.style.paddingTop = "0";
    } else {
      document.body.classList.remove("no-header");
      document.body.style.paddingTop = "8vh";
    }
  }, [isSigninOrSignup]);

  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        event.target.closest(SearchContainer) === null &&
        !event.target.closest(".search-icon")
      ) {
        setDisabled(true);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`nav ${isSigninOrSignup ? "no-header" : ""}`}>
      <p
        className="nav-brand"
        onClick={() => {
          navigate("/");
          setBooks(null);
          setSearchTerm(null);
          setIndexes(null);
        }}
      >
        Home
      </p>

      <ul className={active}>
        <li className="nav-item">
          <p
            className="nav-link"
            onClick={() => {
              navigate("/search");
              setActive("nav-menu");
              setIcon("nav-toggler");
            }}
          >
            Pesquisar
          </p>
        </li>
        <li className="nav-item">
          <p className="nav-link" onClick={() => navigate("/profile")}>
            Meu perfil
          </p>
        </li>
        <li className="nav-item">
          <p className="nav-link">Favoritos</p>
        </li>
        <li className="nav-item">
          <p className="nav-link">Sobre</p>
        </li>
        {user && token && (
          <li className="nav-item">
            <p
              className="nav-link"
              onClick={() => {
                logout();
                setActive("nav-menu");
                setIcon("nav-toggler");
                navigate("/signin");
              }}
            >
              Sair
            </p>
          </li>
        )}
      </ul>

      <SearchContainer>
        <CSSTransition
          in={!disabled}
          timeout={400}
          classNames="fade"
          unmountOnExit
        >
          <SearchBar />
        </CSSTransition>

        <IconContext.Provider
          value={{ color: "var(--gray-color)", className: "search-icon" }}
        >
          {disabled ? (
            <IoSearch onClick={() => setDisabled(!disabled)} />
          ) : (
            <IoClose onClick={() => setDisabled(!disabled)} />
          )}
        </IconContext.Provider>
      </SearchContainer>
      {user && token && (
        <Profile>
          <img src={romance} alt="profile" />
        </Profile>
      )}

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
