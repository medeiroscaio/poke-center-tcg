import "./Item.css";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const items = [
  {
    id: 1,
    name: "Bulbasaur",
    stockStatus: "em-estoque",
    quantity: 20,
    price: "10,00 R$",
    priceNew: "",
    purchaseDate: "2024-06-12",
    hasDiscount: false,
  },
  {
    id: 2,
    name: "Charmander",
    stockStatus: "em-estoque",
    quantity: 18,
    price: "10,00 R$",
    priceNew: "vinte mil dolares",
    purchaseDate: "2024-06-12",
    hasDiscount: false,
  },
  {
    id: 3,
    name: "Squirtle",
    stockStatus: "baixo-estoque",
    quantity: 8,
    price: "10,00 R$",
    priceNew: "",
    purchaseDate: "2024-06-12",
    hasDiscount: false,
  },
  {
    id: 4,
    name: "Caterpie",
    stockStatus: "sem-estoque",
    quantity: 0,
    price: "10,00 R$",
    priceNew: "",
    purchaseDate: "2024-06-12",
    hasDiscount: false,
  },
  {
    id: 5,
    name: "Pikachu",
    stockStatus: "baixo-estoque",
    quantity: 5,
    price: "10,00 R$",
    priceNew: "6,00 R$",
    purchaseDate: "2024-06-12",
    hasDiscount: true,
  },
  {
    id: 6,
    name: "Onyx",
    stockStatus: "baixo-estoque",
    quantity: 9,
    price: "10,00 R$",
    priceNew: "",
    purchaseDate: "2024-06-12",
    hasDiscount: false,
  },
];

function Item({ searchFilter = "" }) {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <>
      {filteredItems.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <span className={`status ${item.stockStatus}`}>
              {item.stockStatus.replace("-", " ")}
            </span>
          </td>
          <td>{item.quantity}</td>
          {item.hasDiscount ? (
            <td>
              <del>{item.price}</del>
              <span className="new-price">&nbsp;{item.priceNew}</span>
            </td>
          ) : (
            <td>{item.price}</td>
          )}
          <td>{item.purchaseDate}</td>
          <td>
            <button className="edit-btn">
              <FiEdit3 />
            </button>
            <button className="delete-btn">
              <MdDeleteOutline />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Item;
