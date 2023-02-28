import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { Background, Container, Pages } from "./style";
import { getBooksByTitle } from "../../services/searchBooksApi";
import EachBook from "../../components/EachBook";
import { useBooks } from "../../contexts/BooksContext";
import { useIndexes } from "../../contexts/IndexesContext";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { books, setBooks } = useBooks();
  const { indexes, setIndexes } = useIndexes();
  const booksPerPage = 24;
  console.log(indexes);

  async function handlSearch(event) {
    if (
      (event.key === "Enter" || event.target.id === "search-icon") &&
      searchTerm
    ) {
      event.preventDefault();
      setIsLoading(true);
      setBooks(null);
      setIndexes(null);
      setError(null);
      try {
        const data = await getBooksByTitle(searchTerm);
        setBooks(data);
        const pagesQuantity = Math.ceil(data.totalItems / booksPerPage);
        setIndexes(
          Array.from({ length: pagesQuantity }, (_, index) => index + 1)
        );
      } catch (error) {
        console.error(error);
        setError("Não foi possível encontrar livros pelo título procurado.");
      }
      setIsLoading(false);
      setSearchTerm(null);
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
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <IconContext.Provider
            value={{ color: "#FF006E", className: "search-icon" }}
          >
            <IoSearch id="search-icon" onClick={handlSearch} />
          </IconContext.Provider>
        </div>
      </Background>
      <Container>
        {error ? (
          <h1>{error}</h1>
        ) : (
          books?.items.map((book, index) => (
            <EachBook key={index} book={book} />
          ))
        )}
      </Container>
      <Pages>
        {indexes.length > 1 &&
          indexes?.map((index) => <button>{index}</button>)}
      </Pages>
    </>
  );
}
