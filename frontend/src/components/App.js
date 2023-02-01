import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}
