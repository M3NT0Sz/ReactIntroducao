import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../api';

const Rendas = () => {
    const [rendas, setRendas] = useState([]);

    useEffect(() => {
        api.get('/fontes')
            .then(response => {
                setRendas(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar rendas:', error);
            });
    }, []);

    return (
        <Container>
            <h3>Lista de Rendas</h3>
            {rendas.length === 0 ? (
                <p>Nenhuma renda cadastrada.</p>
            ) : (
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
                        {rendas.map((renda, index) => (
                            <tr key={index}>
                                <td>{renda.id}</td>
                                <td>{renda.nome}</td>
                                <td>{renda.descricao}</td>
                                <td>
                                    <Button variant="info" as={Link} to="/consultar_renda" state={{ renda }} className="me-2">
                                        Consultar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default Rendas;