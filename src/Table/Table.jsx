import "./Table.css";
import Item from "../components/Item/Item.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Container from "../components/Container/container.jsx";
import { LuDatabaseBackup } from "react-icons/lu";

function Table() {
  
  const [search, setSearch] = useState('');

  return (
    <Container>
      <div className="table-header">
        <h2>Cards</h2>
        <div className="header-end">
          <div className="table-header-btns">
            <button className="header-btn"> <span><IoIosAdd/></span> <p>Cadastrar Cartas</p> </button>
            <button className="header-btn"> <span><LuDatabaseBackup/></span> <p>Recuperar Cartas</p> </button>
          </div>
          <div className="table-search-bar">
            {/* <button className="header-btn search-btn">Filtrar</button> */}
            <SearchBar onSearch={setSearch} />
          </div>
        </div>
      </div>
      <div className="item-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome da carta</th>
              <th>Estado do estoque</th>
              <th>Quantidade estoque</th>
              <th>Preço</th>
              <th>Data de compra</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <Item searchFilter={search} />
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default Table;
