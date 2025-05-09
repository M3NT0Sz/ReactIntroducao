import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../api';

const Movimentacoes = () => {
    const [movimentacoes, setMovimentacoes] = useState([]);

    useEffect(() => {
        api.get('/movimentacoes')
            .then(response => {
                setMovimentacoes(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar movimentações:', error);
            });
    }, []);

    return (
        <Container>
            <h3>Lista de Movimentações</h3>
            {movimentacoes.length === 0 ? (
                <p>Nenhuma movimentação cadastrada.</p>
            ) : (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tipo</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Conta</th>
                            <th>Categoria</th>
                            <th>Fonte</th>
                            <th>Descrição</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movimentacoes.map((movimentacao, index) => (
                            <tr key={index}>
                                <td>{movimentacao.id}</td>
                                <td>{movimentacao.tipo}</td>
                                <td>{movimentacao.valor}</td>
                                <td>{movimentacao.data_movimentacao}</td>
                                <td>{movimentacao.conta_id}</td>
                                <td>{movimentacao.categoria_despesa_id}</td>
                                <td>{movimentacao.fonte_renda_id}</td>
                                <td>{movimentacao.descricao}</td>
                                <td>
                                    <Button variant="info" as={Link} to="/consultar_movimentacao" state={{ movimentacao }} className="me-2">
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

export default Movimentacoes;