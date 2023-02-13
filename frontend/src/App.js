import GlobalStyle from "./styles/GlobalStyle";
import Header from "./common/Header";
import Home from "./screens/Home";
import Search from "./screens/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
