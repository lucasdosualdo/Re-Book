import styled from "styled-components";
import { useState, useEffect } from "react";
import { IoHeartOutline, IoHeart, IoStarSharp, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import axios from "axios";

export default function Main() {
  const [liked, setLiked] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState(null);

  const API_KEY = "AIzaSyCg5qemUDiZIPNv1o2ExfOIXs5yAJM1rDc";

  function getData() {
    const promise = axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=sapiens&langRestrict=pt&printType=books&orderBy=newest&key=${API_KEY}`
    );
    promise.then((answer) => {
      console.log(answer.data.items[0]);
      setPhoto(answer.data.items[0].volumeInfo.imageLinks?.thumbnail);
      setDescription(answer.data.items[0].volumeInfo.description);
    });
    promise.then((error) => {
      console.log(error.message);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Book>
        <IconContext.Provider
          value={{ color: "#cccccc", className: "like-icon" }}
        >
          {!liked && <IoHeartOutline onClick={() => setLiked(!liked)} />}
          {liked && <IoHeart onClick={() => setLiked(!liked)} />}
        </IconContext.Provider>
        <img
          src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
          alt="narutin"
        />
        <span>
          <IconContext.Provider
            value={{ color: "#e0b828", className: "star-icon" }}
          >
            <IoStar />
          </IconContext.Provider>
          4,5
        </span>
      </Book>
      <Butao onClick={getData}>POIS CLIQUE</Butao>
      {description}
    </>
  );
}

const Book = styled.div`
  width: calc(100% / 7);
  min-width: calc(1000px / 7);
  padding-top: calc(1.45);
  background-color: red;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > span {
    display: flex;
    align-items: center;
    color: #cccccc;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 700;
  }

  .like-icon {
    opacity: 0.7;
    cursor: pointer;
    width: 25px;
    height: 25px;
    position: absolute;
  }
  .star-icon {
    width: 25px;
    height: 25px;
  }
`;

const Butao = styled.button`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
