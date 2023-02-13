import styled from "styled-components";
import { useState, useEffect } from "react";
import { IoHeartOutline, IoHeart, IoStarSharp, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import axios from "axios";

export default function BestRating() {
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
      <BookBox>
        <img
          src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
          alt="narutin"
        />

        <div>
          <h3>Dom Casmurro</h3>
          <h4>Machado de Assis</h4>
          <Rating>
            <IconContext.Provider
              value={{ color: "#e0b828", className: "star-icon" }}
            >
              <IoStar />
            </IconContext.Provider>
            <h5>4,5</h5>
          </Rating>
        </div>
      </BookBox>
    </>
  );
}

const BookBox = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  width: calc(100% / 7);
  min-width: calc(1000px / 7);
  padding-top: calc(1.45);
  border-radius: 10px;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  > div {
    padding: 10px;
    color: #cccccc;

    height: 20px;
    background-color: rgb(0, 17, 33, 0.5);
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
    border-radius: 0 0 10px 10px;
    h3 {
      font-size: 25px;
      font-weight: 700;
    }
    h4 {
        margin-top: 5px;
      font-size: 18px;
    }
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  h5 {
    font-size: 25px;
    font-weight: 700;
    margin-left: 3px;
  }
  .star-icon {
    width: 25px;
    height: 25px;
  }
`;
