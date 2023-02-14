import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { Background, Container, BookBox } from "./style";

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
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
        <BookBox>
          <img
            src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
            alt="narutin"
          />
          <h3>DOM CASMURRO</h3>
          <h5>Machado de Assis</h5>
        </BookBox>
      </Container>
    </>
  );
}
