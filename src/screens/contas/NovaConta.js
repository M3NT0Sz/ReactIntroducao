import React, { useState } from 'react';
import api from '../../api';

const NovaConta = () => {
    const [conta, setConta] = useState({ nome: '', descricao: '' });

    const salvarConta = () => {
        api.post('/contas', conta)
            .then(response => {
                console.log('Conta cadastrada com sucesso:', response.data);
                // Redirecionar ou mostrar mensagem de sucesso
            })
            .catch(error => {
                console.error('Erro ao cadastrar conta:', error);
                // Mostrar mensagem de erro
            });
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Cadastrar Nova Conta</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name='nome'
                        value={conta.nome}
                        onChange={(e) => setConta({ ...conta, nome: e.target.value })}
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
                        name='descricao'
                        value={conta.descricao}
                        onChange={(e) => setConta({ ...conta, descricao: e.target.value })}
                        placeholder="Descrição"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={salvarConta}>Cadastrar</button>
            </form>
        </div>
    );
}

export default NovaConta;