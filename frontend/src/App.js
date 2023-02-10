import GlobalStyle from "./styles/GlobalStyle";
import Header from "./layouts/Header";
import Main from "./pages/Home";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}
