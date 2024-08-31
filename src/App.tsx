import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/media";

const App: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header onMenuToggle={toggleMenu} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        {isMenuOpen && <ModalMenu onClose={toggleMenu} />}
      </ThemeProvider>
    </>
  );
};

export default App;
