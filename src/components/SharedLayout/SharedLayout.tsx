import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const SharedLayout: React.FC<{ onMenuToggle: () => void }> = ({ onMenuToggle }) => {
  return (
    <>
      <Header onMenuToggle={onMenuToggle} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
