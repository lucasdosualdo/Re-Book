import GlobalStyle from "./styles/GlobalStyle";
import Header from "./common/Header";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Book from "./screens/Book";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { BooksProvider } from "./contexts/BooksContext";
import { IndexesProvider } from "./contexts/IndexesContext";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BooksProvider>
          <IndexesProvider>
            <BrowserRouter>
              <GlobalStyle />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/book/:bookId" element={<Book />} />
              </Routes>
            </BrowserRouter>
          </IndexesProvider>
        </BooksProvider>
      </QueryClientProvider>
    </>
  );
}
