import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../api';

const Categorias = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        api.get('/categorias')
            .then(response => {
                setCategorias(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar categorias:', error);
            });
    }, []);

    return (
        <Container>
            <h3>Lista de Categorias</h3>
            {categorias.length === 0 ? (
                <p>Nenhuma categoria cadastrada.</p>
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
                        {categorias.map((categoria, index) => (
                            <tr key={index}>
                                <td>{categoria.id}</td>
                                <td>{categoria.nome}</td>
                                <td>{categoria.descricao}</td>
                                <td>
                                    <Button variant="info" as={Link} to="/consultar_categoria" state={{ categoria }} className="me-2">
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

export default Categorias;