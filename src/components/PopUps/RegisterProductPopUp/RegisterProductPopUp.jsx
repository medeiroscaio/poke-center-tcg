import React, { useEffect, useState } from "react";
import "./RegisterProductPopUp.css";

const RegisterProductPopUp = ({
  isOpen,
  onClose,
  addItem,
  getItems,
  updateItem,
  deleteItem,
}) => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState("");

  const handleClose = () => {
    setProductName("");
    setProductQuantity(0);
    setProductPrice("");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itens = getItems();
    const lastId = itens[itens.length - 1].id;
    const newProduct = {
      id: lastId + 1,
      name: productName,
      stockStatus:
        productQuantity >= 10
          ? "Disponível"
          : productQuantity == 0
          ? "Esgotado"
          : "Poucas unidades",
      quantity: productQuantity,
      price: productPrice,
      priceNew: "",
      purchaseDate: new Date().toLocaleDateString("pt-BR"),
      hasDiscount: false,
    };
    addItem(newProduct);
    console.log("Produto Registrado:", {
      name: productName,
      price: productPrice,
    });
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Registrar Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome do Produto:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Estoque do Produto:</label>
            <input
              type="number"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Preço do Produto:</label>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit">Registrar</button>
            <button type="button" onClick={handleClose}>
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterProductPopUp;
