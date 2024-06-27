import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Btns from './components/btns-wompi-and-donation/Btns';
import DonationPay from './views/DonationPay';
import ContextData from './components/ContextData/ContextData';
import AboutUs from './components/aboutUs/AboutUs';
import QHFA from './views/QHFA';
import DataAnalytics from './views/DataAnalytics';
import Foundation from './views/Foundation';
import ContacUs from './views/ContacUs';
import Communications_ATV from './views/Communications_ATV'
import ApoyoAcademico from './Services/ApoyoAcademico';
import AcompañamientoOrientacion from './Services/AcompañamientoOrientacion';
import Repositorio from './Services/Repositorio';
import Consultorias from './Services/Consultorias';
import Projects_ATV from './views/Projects_ATV';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Btns />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DonationPay" element={<DonationPay />} />
          <Route path="/intervencion/fortalecimiento-academico" element={<QHFA />} />
          <Route path='/dataAnalyctis' element={<DataAnalytics />} />
          <Route path='/Comunicaciones' element={<Communications_ATV />} />
          <Route path='/fundacion' element={<Foundation />}/>
          <Route path='/Proyectos' element={<Projects_ATV />} />
          <Route path='/ContactUs' element={<ContacUs />} />
          <Route path='/ApoyoAcademico' element={<ApoyoAcademico />} />
          <Route path='/AcompañamientoOrientacion' element={<AcompañamientoOrientacion />} />
          <Route path='/Repositorio' element={<Repositorio />} />
          <Route path='/Consultorias' element={<Consultorias />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
