import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>HI HELLO</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
