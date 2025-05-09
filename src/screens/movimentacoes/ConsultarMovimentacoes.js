import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

const ConsultarMovimentacoes = () => {
    const location = useLocation();
    const [movimentacao, setMovimentacao] = useState(location.state?.movimentacao || { tipo: '', valor: '', data_movimentacao: '', conta_id: '', categoria_despesa_id: '', fonte_renda_id: '', descricao: '' });
    const [contas, setContas] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [fontes, setFontes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/contas')
            .then(response => setContas(response.data))
            .catch(error => console.error('Erro ao buscar contas:', error));

        api.get('/categorias')
            .then(response => setCategorias(response.data))
            .catch(error => console.error('Erro ao buscar categorias:', error));

        api.get('/fontes')
            .then(response => setFontes(response.data))
            .catch(error => console.error('Erro ao buscar fontes:', error));
    }, []);

    const editarMovimentacao = (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão do botão
        api.put('/movimentacoes/' + movimentacao.id, movimentacao)
            .then(() => {
                alert("Movimentação editada com sucesso!");
                navigate('/movimentacoes');
            })
            .catch(error => {
                console.error("Erro ao editar movimentação:", error);
                alert("Erro ao editar movimentação.");
            });
    };

    const excluirMovimentacao = (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão do botão
        if (window.confirm("Tem certeza que deseja excluir a movimentação?")) {
            api.delete('/movimentacoes/' + movimentacao.id)
                .then(() => {
                    alert("Movimentação excluída com sucesso!");
                    navigate('/movimentacoes');
                })
                .catch(error => {
                    console.error("Erro ao excluir movimentação:", error);
                    alert("Erro ao excluir movimentação.");
                });
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Editar Movimentação</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="tipo" className="form-label">Tipo</label>
                    <select
                        className="form-control"
                        id="tipo"
                        name="tipo"
                        value={movimentacao.tipo}
                        onChange={(e) => setMovimentacao({ ...movimentacao, tipo: e.target.value })}
                        required
                    >
                        <option value="">Selecione o tipo</option>
                        <option value="despesa">Despesa</option>
                        <option value="receita">Receita</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="valor" className="form-label">Valor</label>
                    <input
                        type="number"
                        className="form-control"
                        id="valor"
                        name="valor"
                        value={movimentacao.valor}
                        onChange={(e) => setMovimentacao({ ...movimentacao, valor: e.target.value })}
                        placeholder="Valor"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="data_movimentacao" className="form-label">Data</label>
                    <input
                        type="date"
                        className="form-control"
                        id="data_movimentacao"
                        name="data_movimentacao"
                        value={movimentacao.data_movimentacao}
                        onChange={(e) => setMovimentacao({ ...movimentacao, data_movimentacao: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="conta_id" className="form-label">Conta</label>
                    <select
                        className="form-control"
                        id="conta_id"
                        name="conta_id"
                        value={movimentacao.conta_id}
                        onChange={(e) => setMovimentacao({ ...movimentacao, conta_id: e.target.value })}
                        required
                    >
                        <option value="">Selecione uma conta</option>
                        {contas.map(conta => (
                            <option key={conta.id} value={conta.id}>{conta.nome}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="categoria_despesa_id" className="form-label">Categoria</label>
                    <select
                        className="form-control"
                        id="categoria_despesa_id"
                        name="categoria_despesa_id"
                        value={movimentacao.categoria_despesa_id}
                        onChange={(e) => setMovimentacao({ ...movimentacao, categoria_despesa_id: e.target.value })}
                        required
                    >
                        <option value="">Selecione uma categoria</option>
                        {categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="fonte_renda_id" className="form-label">Fonte</label>
                    <select
                        className="form-control"
                        id="fonte_renda_id"
                        name="fonte_renda_id"
                        value={movimentacao.fonte_renda_id}
                        onChange={(e) => setMovimentacao({ ...movimentacao, fonte_renda_id: e.target.value })}
                        required
                    >
                        <option value="">Selecione uma fonte</option>
                        {fontes.map(fonte => (
                            <option key={fonte.id} value={fonte.id}>{fonte.nome}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea
                        className="form-control"
                        id="descricao"
                        name="descricao"
                        value={movimentacao.descricao}
                        onChange={(e) => setMovimentacao({ ...movimentacao, descricao: e.target.value })}
                        placeholder="Descrição"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-warning" onClick={editarMovimentacao}>Editar</button>
                <button type="button" className="btn btn-danger" onClick={excluirMovimentacao}>Excluir</button>
            </form>
        </div>
    );
};

export default ConsultarMovimentacoes;