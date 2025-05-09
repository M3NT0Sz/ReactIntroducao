import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

const ConsultarRenda = () => {
    const location = useLocation();
    const [renda, setRenda] = useState(location.state?.renda || { nome: '', descricao: '' });
    const navigate = useNavigate();

    const editarRenda = (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão do botão
        api.put('/fontes/' + renda.id, renda)
            .then(() => {
                alert("Renda editada com sucesso!");
                navigate('/rendas');
            })
            .catch(error => {
                console.error("Erro ao editar renda:", error);
                alert("Erro ao editar renda.");
            });
    };

    const excluirRenda = (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão do botão
        if (window.confirm("Tem certeza que deseja excluir a renda?")) {
            api.delete('/fontes/' + renda.id)
                .then(() => {
                    alert("Renda excluída com sucesso!");
                    navigate('/rendas');
                })
                .catch(error => {
                    console.error("Erro ao excluir renda:", error);
                    alert("Erro ao excluir renda.");
                });
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Editar Renda</h1>
            <form>
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
                <button type="submit" className="btn btn-warning" onClick={editarRenda}>Editar</button>
                <button type="button" className="btn btn-danger" onClick={excluirRenda}>Excluir</button>
            </form>
        </div>
    );
};

export default ConsultarRenda;