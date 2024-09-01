import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/media";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const App: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<SharedLayout onMenuToggle={toggleMenu} />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
        {isMenuOpen && <ModalMenu onClose={toggleMenu} />}
      </ThemeProvider>
    </>
  );
};

export default App;
