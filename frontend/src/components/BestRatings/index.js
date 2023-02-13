import styled from "styled-components";
import { useState, useEffect } from "react";
import { IoChevronForward, IoChevronBack, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import axios from "axios";

export default function BestRating() {
  const [liked, setLiked] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState(null);
  const [margin, setMargin] = useState(0);

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

  function BookGenerator() {
    //12 books
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

  function passToTheLeft() {
    let sizeWalk = margin + Math.round(window.innerWidth / 2); //verifico quanto posso andar para o lado (metade da tela do usuário)
    if (sizeWalk > 0) {
      //se já cheguei na esquerda deixo o scroll no inicio (0)
      sizeWalk = 0;
    }
    setMargin(sizeWalk);
  }

  function passToTheRight() {
    let sizeWalk = margin - Math.round(window.innerWidth / 2); //verifico quanto posso andar para o lado (metade da tela do usuário)
    let lengthList = 12 * (250 + 20); //largura lista (250 é o tamanho da imagem + padding);
    if (window.innerWidth - lengthList > sizeWalk) {
      sizeWalk = window.innerWidth - lengthList;
    }
    setMargin(sizeWalk);
  }

  return (
    <>
      <Title>MELHORES AVALIADOS</Title>
      <OverflowMaker>
        <Container size={270 * 12 + 40} pass={margin}>
          <ViewLeft onClick={passToTheLeft}>
            <IoChevronBack />
          </ViewLeft>
          <ViewRight onClick={passToTheRight}>
            <IoChevronForward />
          </ViewRight>
          <BookGenerator />
        </Container>
      </OverflowMaker>
    </>
  );
}

const Title = styled.h3`
  margin: 40px 0 0 10px;
  color: #ff006e;
  font-weight: 700;
  font-size: 44px;
`;

const OverflowMaker = styled.div`
  overflow-x: hidden;
`;

const Container = styled.div`
  width: ${(props) => props.size}px;
  margin-left: ${(props) => props.pass}px;
  
  display: flex;
  align-items: center;
  padding: 20px 10px;
  transition: all ease 0.5s;
`;

const ViewLeft = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.7);
  color: white;
  font-size: 50px;
  width: 40px;
  height: 100px;
  border-radius: 0 15px 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ViewRight = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.7);
  color: white;
  font-size: 50px;
  width: 40px;
  height: 100px;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BookBox = styled.div`
  margin-right: 20px;
  //width: calc(100vw / 7);
  //min-width: calc(1000px / 7);
  display: inline-block;
  width: 250px;
  padding-top: calc(1.45);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  transition: all 0.4s ease;
  :hover {
    transform: scale(1.05);
  }
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
