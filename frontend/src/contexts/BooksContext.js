import { createContext, useContext, useState } from "react";

const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);
  if (!context) throw new Error("BooksContext not found");
  return context;
}
