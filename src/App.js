import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = React.lazy(() => import("./Components/Navbar"));
const Accueil = React.lazy(() => import("./Pages/Accueil"));
const Footer = React.lazy(() => import("./Components/Footer"));

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />
      <Routes>
        {/* Page d'accueil */}
        <Route exact path="/" element={<Accueil />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
