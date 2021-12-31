import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/';
import AllProductsPage from './pages/AllProducts';

import axios from 'axios';

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/products" element={<AllProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
