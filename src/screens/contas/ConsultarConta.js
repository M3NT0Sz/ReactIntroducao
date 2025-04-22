import React from "react";
import { useState } from "react";

const ConsultarConta = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Editar Conta</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        placeholder="Nome"
                        value=""
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
                        value=""
                        required
                    />
                </div>
                <button type="submit" className="btn btn-warning">Editar</button>
                <button type="submit" className="btn btn-danger">Excluir</button>
            </form >
        </div >
    );
}

export default ConsultarConta;