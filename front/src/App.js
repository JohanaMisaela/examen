import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Livraison from './pages/Livraison';
import Conditions from './pages/Conditions';
import Mentions from './pages/Mentions';
import Paiement from './pages/Paiement';
import Viewpro from './pages/Viewpro';
import Auth from './pages/Auth';
import Signup from './pages/Signup';
import Panier from './pages/Panier';
import Moncompte from './pages/Moncompte';
import Information from './pages/Information';
import Adresse from './pages/Adresse';
import Historique from './pages/Historique';
function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/livraison" element={<Livraison />}></Route>
      <Route path="/conditions" element={<Conditions />}></Route>
      <Route path="/mentions" element={<Mentions />}></Route>
      <Route path="/paiement" element={<Paiement />}></Route>
      <Route path="/view" element={<Viewpro />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/panier" element={<Panier />}></Route> 
      <Route path="/compte" element={<Moncompte />}></Route>
      <Route path="/information" element={<Information />}></Route>
      <Route path="/adresse" element={<Adresse />}></Route>
      <Route path="/historique" element={<Historique />}></Route>
</Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
