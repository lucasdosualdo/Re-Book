import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { Background, Container, Pages, PageButton } from "./style";
import {
  getBooksByTitle,
  getBooksBySubject,
} from "../../services/searchBooksApi";
import EachBook from "../../components/EachBook";
import { useBooks } from "../../contexts/BooksContext";
import { useIndexes } from "../../contexts/IndexesContext";

export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    books,
    setBooks,
    searchTerm,
    setSearchTerm,
    isSubject,
    setIsSubject,
  } = useBooks();
  const { indexes, setIndexes, pageNumber, setPageNumber } = useIndexes();
  const maxBooksPerPage = 24;
  const limitPages = 20;

  async function handlSearch(event) {
    if (
      (event.key === "Enter" || event.target.id === "search-icon") &&
      searchTerm
    ) {
      event.preventDefault();
      setIsLoading(true);
      setBooks(null);
      setIndexes(null);
      setIsSubject(false);
      setError(null);
      try {
        const data = await getBooksByTitle(searchTerm, 0);
        setBooks(data);
        const pages = Math.ceil(data.totalItems / maxBooksPerPage);
        setIndexes(
          Array.from(
            { length: pages > limitPages ? limitPages : pages },
            (_, index) => index + 1
          )
        );
        setPageNumber(1);
      } catch (error) {
        console.error(error);
        setError("Não foi possível encontrar livros pelo título procurado.");
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function handlePages(index) {
    setIsLoading(true);
    setError(null);
    const startIndex = maxBooksPerPage * (index - 1);
    try {
      if (isSubject) {
        const data = await getBooksBySubject(searchTerm, startIndex);
        setBooks(data);
      } else {
        const data = await getBooksByTitle(searchTerm, startIndex);
        setBooks(data);
      }
      setPageNumber(index);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      setError(
        "Não foi possível buscar por mais livros. Por favor, reinicie a página."
      );
    } finally {
      setIsLoading(false);
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
            value={{ color: "var(--pink-color)", className: "search-icon" }}
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
        {indexes?.length > 1 &&
          !error &&
          indexes?.map((index) => (
            <PageButton
              clicked={pageNumber === index}
              isLoading={isLoading}
              disabled={isLoading || pageNumber === index}
              onClick={() => handlePages(index)}
            >
              {index}
            </PageButton>
          ))}
      </Pages>
    </>
  );
}
