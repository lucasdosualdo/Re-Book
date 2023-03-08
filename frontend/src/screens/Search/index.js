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
import ClipLoader from "react-spinners/ClipLoader";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Search() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    setError(state ? state.error : null);
  }, [state]);

  async function handleSearch(event) {
    if (
      (event.key === "Enter" || event.target.id === "search-icon") &&
      searchTerm
    ) {
      event.preventDefault();
      setLoading(true);
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
        setError("Não foi possível encontrar livros pelo título procurado.");
      } finally {
        setLoading(false);
      }
    }
  }

  async function handlePages(index) {
    setLoading(true);
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
      setLoading(false);
    }
  }

  function ShowBooks() {
    if (error) {
      return <h1>{error}</h1>;
    }
    if (loading) {
      return (
        <ClipLoader
          color={"var(--pink-color)"}
          loading={loading}
          speedMultiplier={0.7}
          size={100}
        />
      );
    }

    return books?.items.map((book, index) => (
      <EachBook key={index} book={book} />
    ));
  }

  return (
    <>
      <Background>
        <div>
          <input
            placeholder="Buscar..."
            onKeyDown={handleSearch}
            disabled={loading}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <IconContext.Provider
            value={{ color: "var(--pink-color)", className: "search-icon" }}
          >
            <IoSearch id="search-icon" onClick={handleSearch} />
          </IconContext.Provider>
        </div>
      </Background>
      <Container>
        <ShowBooks />
      </Container>
      <Pages loading={loading}>
        {indexes?.length > 1 &&
          !error &&
          indexes?.map((index) => (
            <PageButton
              clicked={pageNumber === index}
              loading={loading}
              disabled={loading || pageNumber === index}
              onClick={() => handlePages(index)}
            >
              {index}
            </PageButton>
          ))}
      </Pages>
    </>
  );
}
