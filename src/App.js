import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Components/Loading';
import { AuthContext } from './Context/AuthContext';
import axios from 'axios';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';

const Inscription = React.lazy(() => import('./Pages/Inscription'));
const Connexion = React.lazy(() => import('./Pages/Connexion'));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const Accueil = React.lazy(() => import("./Pages/Accueil"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Enregistrement = React.lazy(() => import("./Pages/Enregistrement"));

axios.defaults.withCredentials = true;
function App() {
  const { uid, client } = useContext(AuthContext);
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        <Routes>
          {/* Page d'accueil */}
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/inscription" element={<Inscription />} />
          <Route exact path="/connexion" element={<Connexion />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactUs" element={<Contact />} />
          <Route exact path="/enregistrement" element={<Enregistrement />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
