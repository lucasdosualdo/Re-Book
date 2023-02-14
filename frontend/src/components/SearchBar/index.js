import React, { useState } from "react";
import styled from "styled-components";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(searchTerm);
    }
  };

  return (
    <SearchBox>
      <input
        placeholder="Buscar..."
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
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
    background-color: rgb(204, 204, 204);
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
`;
