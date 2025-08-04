import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import DifusoresAmbiente from './pages/DifusoresAmbiente';
import DifusoresVehiculos from './pages/DifusoresVehiculos';
import PerfumesTextiles from './pages/PerfumesTextiles';
import AceitesEsenciales from './pages/AceitesEsenciales';
import BalsamosNaturales from './pages/BalsamosNaturales';
import SahumeriosNaturales from './pages/SahumeriosNaturales';
import SahumeriosTibetanos from './pages/SahumeriosTibetanos';
import SahumadorCeramica from './pages/SahumadorCeramica';
import PortaSahumerios from './pages/PortaSahumerios';
import CocinaPortaSahumerios from './pages/CocinaPortaSahumerios';
import SalamandraArtesanal from './pages/SalamandraArtesanal';
import ReplicaSalamandraOrelli from './pages/ReplicaSalamandraOrelli';
import PerfumesImitaciones from './pages/PerfumesImitaciones';
import Mohai from './pages/Mohai';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/difusores-ambiente" element={<DifusoresAmbiente />} />
            <Route path="/difusores-vehiculos" element={<DifusoresVehiculos />} />
            <Route path="/perfumes-textiles" element={<PerfumesTextiles />} />
            <Route path="/aceites-esenciales" element={<AceitesEsenciales />} />
            <Route path="/balsamos-naturales" element={<BalsamosNaturales />} />
            <Route path="/sahumerios-naturales" element={<SahumeriosNaturales />} />
            <Route path="/sahumerios-tibetanos" element={<SahumeriosTibetanos />} />
            <Route path="/sahumador-ceramica" element={<SahumadorCeramica />} />
            <Route path="/porta-sahumerios" element={<PortaSahumerios />} />
            <Route path="/cocina-porta-sahumerios" element={<CocinaPortaSahumerios />} />
            <Route path="/salamandra-artesanal" element={<SalamandraArtesanal />} />
            <Route path="/replica-salamandra-orelli" element={<ReplicaSalamandraOrelli />} />
            <Route path="/perfumes-imitaciones" element={<PerfumesImitaciones />} />
            <Route path="/mohai" element={<Mohai />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2025 Perfumes Absoluto. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App; 