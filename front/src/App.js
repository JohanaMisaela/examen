import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Livraison from './pages/Livraison';
import Conditions from './pages/Conditions';
import Mentions from './pages/Mentions';
import Paiement from './pages/Paiement';
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

    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
