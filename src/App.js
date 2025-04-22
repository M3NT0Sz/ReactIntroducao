import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import NovaConta from './screens/contas/NovaConta.js';
import Contas from './screens/contas/Contas.js';
import ConsultarConta from './screens/contas/ConsultarConta.js';
import NovaRenda from './screens/renda/NovaRenda.js';
import Rendas from './screens/renda/Rendas.js';
import ConsultarRenda from './screens/renda/ConsultarRenda.js';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white">Projeto Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/nova_conta" className="text-white">Nova Conta</Nav.Link>
              <Nav.Link as={Link} to="/contas" className="text-white">Contas</Nav.Link>
              <Nav.Link as={Link} to="/nova_renda" className="text-white">Nova Renda</Nav.Link>
              <Nav.Link as={Link} to="/rendas" className="text-white">Rendas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contas" element={<Contas />} />
          <Route path="/nova_conta" element={<NovaConta />} />
          <Route path="/consultar_conta" element={<ConsultarConta />} />
          <Route path="/rendas" element={<Rendas />} />
          <Route path="/nova_renda" element={<NovaRenda />} />
          <Route path="/consultar_renda" element={<ConsultarRenda />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
