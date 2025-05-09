import React, { useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const NovaRenda = () => {
    const [renda, setRenda] = useState({ nome: '', descricao: '' });
    const navigate = useNavigate();

    const salvarRenda = (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão do botão
        api.post('/fontes', renda)
            .then(response => {
                console.log('Renda cadastrada com sucesso:', response.data);
                alert('Renda cadastrada com sucesso!'); // Mostrar mensagem de sucesso
                navigate('/rendas'); // Redirecionar para a página de rendas
            })
            .catch(error => {
                console.error('Erro ao cadastrar renda:', error);
                alert('Erro ao cadastrar renda.'); // Mostrar mensagem de erro
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Cadastrar Nova Renda</h1>
            <form onSubmit={salvarRenda}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={renda.nome}
                        onChange={(e) => setRenda({ ...renda, nome: e.target.value })}
                        placeholder="Nome"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <input
                        type="text"
                        className="form-control"
                        id="descricao"
                        name="descricao"
                        value={renda.descricao}
                        onChange={(e) => setRenda({ ...renda, descricao: e.target.value })}
                        placeholder="Descrição"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
};

export default NovaRenda;