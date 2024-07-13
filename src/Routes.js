import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/home";
import Contato from "./components/pages/contato";

export default function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contatos' element={<Contato />} />
          </Routes>
        </Router>
      </>
    )
  }