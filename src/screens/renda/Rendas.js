import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Rendas = () => {
    return (
        <Container>
            <h3>Lista de Rendas</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Salário</td>
                        <td>Sálario</td>
                        <td><Button variant="info" as={Link} to="/consultar_renda" className="me-2">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Salário</td>
                        <td>Sálario</td>
                        <td><Button variant="info" as={Link} to="/consultar_renda" className="me-2">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Salário</td>
                        <td>Sálario</td>
                        <td><Button variant="info" as={Link} to="/consultar_renda" className="me-2">Consultar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Rendas;