import React, { useState } from 'react';

const NovaRenda = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Cadastrar Nova Renda</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
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
                        placeholder="Descrição"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
}

export default NovaRenda;