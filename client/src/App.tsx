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
import Cart from './pages/Cart';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import LogoutPage from './pages/Logout';

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
  const [showMenu, setShowMenu] = useState(true);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      <BrowserRouter>
        <Navbar />
        {showMenu && <Menu />}
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </MenuContext.Provider>
  );
};

export default App;
