import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Btns from './components/btns-wompi-and-donation/Btns';
import DonationPay from './views/DonationPay';
import AboutUs from './components/aboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Btns />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DonationPay" element={<DonationPay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
