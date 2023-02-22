import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { Background, Container, BookBox } from "./style";
import { useQuery } from "react-query";
import { getBooks } from "../../services/searchBooksApi";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useQuery(
    ["search-books", searchTerm],
    async () => {
      const response = await getBooks(searchTerm);
      setIsLoading(false);
      return response;
    },
    { refetchOnWindowFocus: false }
  );

  async function handlSearch(event) {
    if (event.key === "Enter" || event.target.id === "search-icon") {
      event.preventDefault();
      setSearchTerm(event.target.value);
      setIsLoading(true);
    }
  }

  return (
    <>
      <Background>
        <div>
          <input
            placeholder="Buscar..."
            onKeyDown={handlSearch}
            disabled={isLoading}
          />

          <IconContext.Provider
            value={{ color: "#FF006E", className: "search-icon" }}
          >
            <IoSearch id="search-icon" onClick={handlSearch} />
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
