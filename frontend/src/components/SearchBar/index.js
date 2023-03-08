import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useBooks } from "../../contexts/BooksContext";
import { useIndexes } from "../../contexts/IndexesContext";
import { getBooksByTitle } from "../../services/searchBooksApi";

export default function SearchBar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setBooks, searchTerm, setSearchTerm, setIsSubject } = useBooks();

  const { setIndexes, setPageNumber } = useIndexes();
  const maxBooksPerPage = 24;
  const limitPages = 20;

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
        setLoading(false);
        navigate("/search");
      } catch (err) {
        console.error(err);
        setLoading(false);
        const error =
          "Não foi possível encontrar livros pelo título procurado.";
        navigate("/search", { state: { error } });
      }
    }
  }

  return (
    <SearchBox>
      <input
        placeholder="Buscar..."
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />
    </SearchBox>
  );
}

const SearchBox = styled.div`
  width: 200px;
  height: 35px;
  border-radius: 10px;
  margin-right: 5px;
  input {
    background-color: var(--gray-color);
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    :focus {
      outline: none;
    }
    &::placeholder {
      color: #898989;
    }
  }

  @media (max-width: 500px) {
    width: 120px;
  }
`;
