import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, MenuButton, Nav } from './Header.styled';

interface HeaderProps {
    onMenuToggle: () => void;
  }
  const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <HeaderContainer>
      <Link to='/home'>Logo</Link>
      <Nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </Nav>
      <MenuButton onClick={onMenuToggle}>Menu</MenuButton>
    </HeaderContainer>
  );
};

export default Header;
