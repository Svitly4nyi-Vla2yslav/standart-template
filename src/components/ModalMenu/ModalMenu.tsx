import React from "react";
import { ModalBackground, ModalContainer } from "./ModalMenu.styled";
import { Link } from "react-router-dom";

interface ModalMenuProps {
  onClose: () => void;
}

const ModalMenu: React.FC<ModalMenuProps> = ({ onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <h2>Menu</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button onClick={onClose}>Close</button>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ModalMenu;
