import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoSearch, IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import SearchBar from "../components/SearchBar";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../contexts/BooksContext";
import { useIndexes } from "../contexts/IndexesContext";

export default function Header() {
  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const { setBooks } = useBooks();
  const { setIndexes } = useIndexes();
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
    <nav className="nav">
      <a
        href="#"
        className="nav-brand"
        onClick={() => {
          navigate("/");
          setBooks(null);
          setIndexes(null);
        }}
      >
        Home
      </a>
      <a href="#" className="nav-brand" onClick={() => navigate("/search")}>
        Search
      </a>
      <ul className={active}>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Hodwdwqdwqdwqme
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
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
          value={{ color: "#cccccc", className: "search-icon" }}
        >
          {disabled ? (
            <IoSearch onClick={() => setDisabled(!disabled)} />
          ) : (
            <IoClose onClick={() => setDisabled(!disabled)} />
          )}
        </IconContext.Provider>
      </SearchContainer>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20vw;
`;
