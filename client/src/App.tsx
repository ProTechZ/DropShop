import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/';
import Menu from './components/Menu/';
import AllProductsPage from './pages/AllProducts';

import axios from 'axios';
import ProductDetail from './pages/SingleProduct';

axios.defaults.withCredentials = true;

type MenuContextType = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType>({
  showMenu: false,
  setShowMenu: () => {},
});

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      <BrowserRouter>
        <Navbar />
        {showMenu && <Menu />}
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </MenuContext.Provider>
  );
};

export default App;
