import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/User/Main';
import Viewpro from './pages/User/Viewpro';
import Panier from './pages/User/Panier';
import Moncompte from './pages/User/Moncompte';
import Information from './pages/User/Information';
import Historique from './pages/User/Historique';
import Wishlist from './pages/User/Wishlist';

import Additem from './pages/Admin/Additem';
import AllCommand from './pages/Admin/AllCommand';
import AdminMain from './pages/Admin/AdminMain';

import Auth from './pages/All/Auth';
import Signup from './pages/All/Signup';
import Livraison from './pages/All/Livraison';
import Conditions from './pages/All/Conditions';
import Mentions from './pages/All/Mentions';
import Paiement from './pages/All/Paiement';
import Adresse from './pages/All/Adresse';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
  //user routes
      <Route path="/" element={<Main />}></Route>
      <Route path="/viewpro" element={<Viewpro />}></Route>
      <Route path="/panier" element={<Panier />}></Route> 
      <Route path="/compte" element={<Moncompte />}></Route>
      <Route path="/information" element={<Information />}></Route>
      <Route path="/adresse" element={<Adresse />}></Route>
      <Route path="/historique" element={<Historique />}></Route>
      <Route path="/wish" element={<Wishlist />}></Route>
//admin routes
      <Route path="/additem" element={<Additem />}></Route>
      <Route path="/allcommand" element={<AllCommand />}></Route>
      <Route path="/admin" element={<AdminMain />}></Route>
//all routes
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/livraison" element={<Livraison />}></Route>
      <Route path="/conditions" element={<Conditions />}></Route>
      <Route path="/mentions" element={<Mentions />}></Route>
      <Route path="/paiement" element={<Paiement />}></Route>

</Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
