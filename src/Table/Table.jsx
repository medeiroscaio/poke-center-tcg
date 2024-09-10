import "./Table.css";
import Item from "../components/Item/Item.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Container from "../components/Container/Container.jsx";
import { LuDatabaseBackup } from "react-icons/lu";
import RegisterProductPopUp from "../components/PopUps/RegisterProductPopUp/RegisterProductPopUp.jsx";

let items = [
  {
    id: 1,
    name: "Bulbasaur",
    stockStatus: "Dísponivel",
    quantity: 20,
    price: 10,
    priceNew: 0,
    purchaseDate: "06/09/2024",
    hasDiscount: false,
  },
  {
    id: 2,
    name: "Charmander",
    stockStatus: "Dísponivel",
    quantity: 18,
    price: 10,
    priceNew: 0,
    purchaseDate: "06/09/2024",
    hasDiscount: false,
  },
  {
    id: 3,
    name: "Squirtle",
    stockStatus: "Poucas Unidades",
    quantity: 8,
    price: 10,
    priceNew: 0,
    purchaseDate: "06/09/2024",
    hasDiscount: false,
  },
  {
    id: 4,
    name: "Caterpie",
    stockStatus: "Esgotado",
    quantity: 0,
    price: 10,
    priceNew: 0,
    purchaseDate: "06/09/2024",
    hasDiscount: false,
  },
  {
    id: 5,
    name: "Pikachu",
    stockStatus: "Poucas unidades",
    quantity: 5,
    price: 10,
    priceNew: 0,
    purchaseDate: "06/09/2024",
    hasDiscount: true,
  },
  {
    id: 6,
    name: "Onyx",
    stockStatus: "Poucas unidades",
    quantity: 9,
    price: 10,
    priceNew: 0,
    purchaseDate: "06/09/2024",
    hasDiscount: false,
  },
];

function Table() {
  const [search, setSearch] = useState("");
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const openPopUp = () => setPopUpOpen(true);
  const closePopUp = () => setPopUpOpen(false);

  const addItem = (newItem) => items.push(newItem);
  const getItems = () => items;
  const updateItem = (oldItem, newItem) => {
    items = items.map((item) => (item.id === oldItem.id ? newItem : item));
  };
  const deleteItem = (index) => items.splice(index, 1);

  return (
    <Container>
      <div className="table-header">
        <h2>Cards</h2>
        <div className="header-end">
          <div className="table-header-btns">
            <button className="header-btn" onClick={openPopUp}>
              {" "}
              <span>
                <IoIosAdd />
              </span>{" "}
              <p>Cadastrar Cartas</p>{" "}
            </button>
            <button className="header-btn">
              {" "}
              <span>
                <LuDatabaseBackup />
              </span>{" "}
              <p>Recuperar Cartas</p>{" "}
            </button>
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
            <Item
              searchFilter={search}
              PopUpOpen={isPopUpOpen}
              getItems={getItems}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          </tbody>
        </table>
        <RegisterProductPopUp
          isOpen={isPopUpOpen}
          onClose={closePopUp}
          addItem={addItem}
          getItems={getItems}
        />
      </div>
    </Container>
  );
}

export default Table;
