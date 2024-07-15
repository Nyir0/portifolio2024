import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home";
import Contato from "./components/pages/contato";
import Observacoes from "./components/pages/observacoes";
import Servicos from "./components/pages/servicoes";

export default function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contatos' element={<Contato />} />
            <Route path='/observacoes' element={<Observacoes />} />
            <Route path='/servicos' element={<Servicos />} />
          </Routes>
        </Router>
      </>
    )
  }