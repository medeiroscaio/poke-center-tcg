import React, { useState } from "react";
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
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setProductName("");
    setProductQuantity(0);
    setProductPrice("");
    setSelectedCard(null);
    setCards([]);
    setErrorMessage("");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCard) {
      setErrorMessage("Por favor, selecione uma carta.");
      return;
    }

    if (productQuantity <= 0 || !productPrice) {
      setErrorMessage("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const items = getItems();
    const lastId = items.length ? items[items.length - 1].id : 0;

    const newProduct = {
      id: lastId + 1,
      name: selectedCard.name,
      stockStatus: productQuantity >= 10
        ? "Disponível"
        : productQuantity === 0
        ? "Esgotado"
        : "Poucas unidades",
      quantity: productQuantity,
      price: productPrice,
      priceNew: "",
      purchaseDate: new Date().toLocaleDateString("pt-BR"),
      hasDiscount: false,
    };

    addItem(newProduct);

    console.log("Produto Registrado:", newProduct);

    handleClose();
  };

  const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      const searchInput = e.target.value.trim();
      setErrorMessage("");
      setCards([]);

      if (!searchInput) {
        setErrorMessage('Por favor, digite um nome para pesquisar.');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/fetch-cards?name=${encodeURIComponent(searchInput)}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar as cartas.');
        }
        const fetchedCards = await response.json();
        if (fetchedCards.length === 0) {
          setErrorMessage('Nenhuma carta encontrada.');
        } else {
          setCards(fetchedCards);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-body">
          <div className="form-section">
            <h2>Registrar Produto</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome da Carta:</label>
                <input
                  type="text"
                  id="search-input"
                  onKeyDown={handleSearch}
                  placeholder="Digite o nome da carta e aperte Enter"
                />
              </div>
              <div className="form-group">
                <label>Estoque do Produto:</label>
                <input
                  type="number"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(Number(e.target.value))}
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
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </form>
          </div>
          <div className="cards-section">
            <div className="cards-container">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`card ${selectedCard?.id === card.id ? 'selected' : ''}`}
                  onClick={() => handleCardClick(card)}
                >
                  <img
                    src={card.image ? `${card.image}/high.png` : '../src/assets/placeholder.png'}
                    alt={card.name}
                    className="card-image"
                  />
                  <h2>{card.name}</h2>
                  <p>ID: {card.id}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterProductPopUp;
