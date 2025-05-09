import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

const ConsultarCategoria = () => {
    const location = useLocation();
    const [categoria, setCategoria] = useState(location.state?.categoria || { nome: '', descricao: '' });
    const navigate = useNavigate();

    const editarCategoria = (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão do botão
        api.put('/categorias/' + categoria.id, categoria)
            .then(() => {
                alert("Categoria editada com sucesso!");
                navigate('/categorias');
            })
            .catch(error => {
                console.error("Erro ao editar categoria:", error);
                alert("Erro ao editar categoria.");
            });
    };

    const excluirCategoria = (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão do botão
        if (window.confirm("Tem certeza que deseja excluir a categoria?")) {
            api.delete('/categorias/' + categoria.id)
                .then(() => {
                    alert("Categoria excluída com sucesso!");
                    navigate('/categorias');
                })
                .catch(error => {
                    console.error("Erro ao excluir categoria:", error);
                    alert("Erro ao excluir categoria.");
                });
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Editar Categoria</h1>
            <form>
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
                <button type="submit" className="btn btn-warning" onClick={editarCategoria}>Editar</button>
                <button type="button" className="btn btn-danger" onClick={excluirCategoria}>Excluir</button>
            </form>
        </div>
    );
};

export default ConsultarCategoria;