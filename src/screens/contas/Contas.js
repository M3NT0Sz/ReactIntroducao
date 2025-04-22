import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Contas = () => {
    return (
        <Container>
            <h3>Lista de Contas</h3>
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
                        <td>Conta de Luz</td>
                        <td>Conta mensal de energia elétrica</td>
                        <td><Button variant="info" as={Link} to="/consultar_conta" className="me-2">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Conta de Luz</td>
                        <td>Conta mensal de energia elétrica</td>
                        <td><Button variant="info" as={Link} to="/consultar_conta" className="me-2">Consultar</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Conta de Luz</td>
                        <td>Conta mensal de energia elétrica</td>
                        <td><Button variant="info" as={Link} to="/consultar_conta" className="me-2">Consultar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Contas;