import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Impact from "./pages/Impact/Impact"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar/navbar';
import Support from './pages/support/support';
import ImpactNav from './components/impactNavbar/impactNavbar';
import Product from './pages/Product/product';
import ModelS from './pages/teslaModelS/modelS';
import ModelX from './pages/teslaModelX/modelX';
import {SidebarContextProvider} from "./context/useContext";
import Sidebar from './components/Sidebar/sidebar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarContextProvider>
    <BrowserRouter>
    <Navbar/>
    <ImpactNav/>
    <Sidebar></Sidebar>
    <Routes>
      <Route exact path='/' element={<App/>} />
      <Route path='/impact' element={<Impact/>} />
      <Route path='/support' element={<Support/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/modelS' element={<ModelS/>} />
      <Route path='/modelX' element={<ModelX/>} />
      </Routes>
    </BrowserRouter>
    </SidebarContextProvider>
  </React.StrictMode>
);


