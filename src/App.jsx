import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import MenPage from "./MWK/MenPage.jsx";
import WomenPage from "./MWK/WomenPage.jsx";
import KidsPage from "./MWK/KidsPage.jsx";
import BrandsPage from "./MWK/Brands.jsx";
import NikePage from "./Brands/Nike.jsx";  
import AdidasPage from "./Brands/Adidas.jsx";
import PumaPage from "./Brands/Puma.jsx";
import AntaPage from "./Brands/Anta.jsx";
import NewBalancePage from "./Brands/NewBalance.jsx";
import UnderArmourPage from "./Brands/UnderArmour.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/nike" element={<NikePage />} />
        <Route path="/adidas" element={<AdidasPage />} />
        <Route path="/puma" element={<PumaPage />} />
        <Route path="/anta" element={<AntaPage />} />
        <Route path="/new-balance" element={<NewBalancePage />} />
        <Route path="/under-armour" element={<UnderArmourPage />} />
      </Routes>
    </Router>
  );
}

export default App;
