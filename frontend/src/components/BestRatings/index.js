import { useState, useEffect } from "react";
import { IoChevronForward, IoChevronBack, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import axios from "axios";
import {
  Title,
  OverflowMaker,
  Container,
  ViewLeft,
  ViewRight,
  BookBox,
  Rating,
} from "./style";

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
