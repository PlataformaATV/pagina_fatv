import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Btns from './components/btns-wompi-and-donation/Btns';
import DonationPay from './views/DonationPay';
import ContextData from './components/ContextData/ContextData';
import AboutUs from './components/aboutUs/AboutUs';
import QHFA from './views/QHFA';
import Foundation from './views/Foundation'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Btns />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DonationPay" element={<DonationPay />} />
          <Route path="/intervencion/fortalecimiento-academico" element={<QHFA />} />
          <Route path='/Fundacion'  element={<Foundation/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
