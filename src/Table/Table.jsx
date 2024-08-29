import "./Table.css";
import Item from "../components/Item/Item.jsx"


function Table() {
  return (
    <div className="table-container">
        <div className="table-header">
            <h2>Lista de Cartas</h2>
            <div className="table-header-btn">
            <button className="header-btn">Cadastrar Cartas</button>
            <button className="header-btn">Recuperar Cartas</button>
            </div>
        </div>
        <table className="item-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome da carta</th>
                    <th>Estado do estoque</th>
                    <th>Qunatidade estoque</th>
                    <th>Preço</th>
                    <th>Data de compra</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                <Item/>
            </tbody>
        </table>
    </div>
    );
};

export default Table;
