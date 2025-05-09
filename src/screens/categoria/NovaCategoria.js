import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const NovaCategoria = () => {
    const [categoria, setCategoria] = useState({ nome: '', descricao: '' });
    const navigate = useNavigate();

    const salvarCategoria = (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão do botão
        api.post('/categorias', categoria)
            .then(response => {
                console.log('Categoria cadastrada com sucesso:', response.data);
                alert('Categoria cadastrada com sucesso!'); // Mostrar mensagem de sucesso
                navigate('/categorias'); // Redirecionar para a página de categorias
            })
            .catch(error => {
                console.error('Erro ao cadastrar categoria:', error);
                alert('Erro ao cadastrar categoria.'); // Mostrar mensagem de erro
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Cadastrar Nova Categoria</h1>
            <form onSubmit={salvarCategoria}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={categoria.nome}
                        onChange={(e) => setCategoria({ ...categoria, nome: e.target.value })}
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
                        value={categoria.descricao}
                        onChange={(e) => setCategoria({ ...categoria, descricao: e.target.value })}
                        placeholder="Descrição"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
};

export default NovaCategoria;