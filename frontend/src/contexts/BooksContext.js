import { createContext, useContext, useState } from "react";

const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [isSubject, setIsSubject] = useState(false);
  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        searchTerm,
        setSearchTerm,
        isSubject,
        setIsSubject,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);
  if (!context) throw new Error("BooksContext not found");
  return context;
}
