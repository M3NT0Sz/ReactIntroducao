import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

const ConsultarConta = () => {
    const location = useLocation();
    const [conta, setConta] = useState(location.state?.conta || { nome: '', descricao: '' });
    const navigate = useNavigate();

    const editarConta = () => {
        api.put('/contas/' + conta.id, conta)
            .then(() => alert("Conta editada com sucesso!"));
        navigate('/contas');
    }

    const excluirConta = () => {
        if (window.confirm("Tem certeza que deseja excluir a conta?")) {
            api.delete('/contas/' + conta.id)
                .then(() => alert("Conta excluída com sucesso!"));
            navigate('/contas');
        }
    }

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
                        name="nome"
                        placeholder="Nome"
                        value={conta.nome}
                        onChange={(e) => setConta({ ...conta, nome: e.target.value })}
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
                        placeholder="Descrição"
                        value={conta.descricao}
                        onChange={(e) => setConta({ ...conta, descricao: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-warning" onClick={editarConta}>Editar</button>
                <button type="submit" className="btn btn-danger" onClick={excluirConta}>Excluir</button>
            </form >
        </div >
    );
}

export default ConsultarConta;