import styled from "styled-components";
import { useState, useEffect } from "react";
import library from "../../assets/images/library.jpg";
import { IoSearch, IoClose } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

export default function Search() {
  const [liked, setLiked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(searchTerm);
    }
  };
  return (
    <>
      <Background>
        <div>
          <input
            placeholder="Buscar..."
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <IconContext.Provider
            value={{ color: "#FF006E", className: "search-icon" }}
          >
            <IoSearch />
          </IconContext.Provider>
        </div>
      </Background>
      <Container>
        <BookBox></BookBox>
        <BookBox></BookBox>
        <BookBox></BookBox>
        <BookBox></BookBox>
        <BookBox></BookBox>
        <BookBox></BookBox>
        <BookBox></BookBox>
        <BookBox></BookBox>
        <BookBox></BookBox>
        <BookBox></BookBox>
      </Container>
    </>
  );
}

const Background = styled.div`
  background-image: linear-gradient(to bottom, transparent, #021323),
    url(${library});
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 50%;
    height: 70px;
    background-color: white;
    border-radius: 50px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.3);
    position: relative;
    display: flex;
    align-items: center;
    input {
      background-color: rgb(204, 204, 204);
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 50px;
      padding-left: 30px;
      font-size: 20px;
      :focus {
        outline: none;
      }
      &::placeholder {
        color: #898989;
      }
    }
    .search-icon {
      position: absolute;
      right: 30px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  background-color: #021323;
  padding: 70px 0 0 20px;
`;

const BookBox = styled.div`
  width: 215px;
  height: 200px;
  background-color: white;
  margin: 0 20px 20px 0;
`;
