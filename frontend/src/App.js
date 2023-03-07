import GlobalStyle from "./styles/GlobalStyle";
import Header from "./common/Header";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Book from "./screens/Book";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { BooksProvider } from "./contexts/BooksContext";
import { IndexesProvider } from "./contexts/IndexesContext";
import Signin from "./screens/Authentication/Signin";
import Signup from "./screens/Authentication/Signup";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BooksProvider>
            <IndexesProvider>
              <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/book/:bookId" element={<Book />} />
                </Routes>
              </BrowserRouter>
            </IndexesProvider>
          </BooksProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
