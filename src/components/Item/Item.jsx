import "./Item.css";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import EditProductPopUp from "../PopUps/EditProductPopUp/EditProductPopUp.jsx";
import DeletePopUp from "../PopUps/DeletePopUp/DeletePopUp.jsx";

function Item({ searchFilter = "", getItems, updateItem, deleteItem }) {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [popView, setPopView] = useState("");
  const [itemID, setItemID] = useState("");
  const openPopUp = () => setPopUpOpen(true);
  const closePopUp = () => setPopUpOpen(false);

  const handlePopUp = (itemID, pop) => {
    setPopView(pop);
    setItemID(itemID);
    openPopUp();
  };

  const items = getItems();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const stockCalc = (quantity) => {
    return quantity >= 10
      ? "em-estoque"
      : quantity === 0
      ? "sem-estoque"
      : "baixo-estoque";
  };

  return (
    <>
      {filteredItems.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <span className={`status ${stockCalc(item.quantity)}`}>
              {item.stockStatus}
            </span>
          </td>
          <td>{item.quantity}</td>
          {item.hasDiscount ? (
            <td>
              <del>{item.price}</del>
              <span className="new-price">&nbsp;{"R$" + item.priceNew}</span>
            </td>
          ) : (
            <td>{"R$" + item.price}</td>
          )}
          <td>{item.purchaseDate}</td>
          <td>
            <button
              className="edit-btn"
              onClick={() => handlePopUp(item.id, 1)}
            >
              <FiEdit3 />
            </button>
            <button
              className="delete-btn"
              onClick={() => handlePopUp(item.id, 2)}
            >
              <MdDeleteOutline />
            </button>
          </td>
        </tr>
      ))}
      {popView === 1 ? (
        <EditProductPopUp
          isOpen={isPopUpOpen}
          onClose={closePopUp}
          getItems={getItems}
          updateItem={updateItem}
          itemID={itemID}
        />
      ) : (
        ""
      )}
      {popView === 2 ? (
        <DeletePopUp
          isOpen={isPopUpOpen}
          onClose={closePopUp}
          getItems={getItems}
          deleteItem={deleteItem}
          itemID={itemID}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Item;
