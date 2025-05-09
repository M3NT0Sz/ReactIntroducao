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
import Categorias from './screens/categoria/Categorias.js';
import NovaCategoria from './screens/categoria/NovaCategoria.js';
import ConsultarCategoria from './screens/categoria/ConsultarCategoria.js';
import Movimentacao from './screens/movimentacoes/Movimentacoes.js';
import NovaMovimentacao from './screens/movimentacoes/NovaMovimentacao.js';
import ConsultarMovimentacao from './screens/movimentacoes/ConsultarMovimentacoes.js';

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
              <Nav.Link as={Link} to="/nova_categoria" className="text-white">Nova Categoria</Nav.Link>
              <Nav.Link as={Link} to="/categorias" className="text-white">Categoria</Nav.Link>
              <Nav.Link as={Link} to="/nova_movimentacao" className="text-white">Nova Movimentação</Nav.Link>
              <Nav.Link as={Link} to="/movimentacoes" className="text-white">Movimentações</Nav.Link>
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
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/nova_categoria" element={<NovaCategoria />} />
          <Route path="/consultar_categoria" element={<ConsultarCategoria />} />
          <Route path="/movimentacoes" element={<Movimentacao />} />
          <Route path="/nova_movimentacao" element={<NovaMovimentacao />} />
          <Route path="/consultar_movimentacao" element={<ConsultarMovimentacao />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
