import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../api'; // Importando a API configurada

const Contas = () => {
    const [contas, setContas] = useState([]);

    useEffect(() => {
        // Fazendo a requisição para buscar as contas do banco de dados
        api.get('/contas')
            .then(response => {
                setContas(response.data); // Atualizando o estado com os dados do banco
            })
            .catch(error => {
                console.error('Erro ao buscar contas:', error);
            });
    }, []);

    return (
        <Container>
            <h3>Lista de Contas</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contas.map((conta, index) => (
                        <tr key={index}>
                            <td>{conta.id}</td>
                            <td>{conta.nome}</td>
                            <td>{conta.descricao}</td>
                            <td>
                                <Button variant="info" as={Link} to="/consultar_conta" state={{ conta }} className="me-2">
                                    Consultar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Contas;