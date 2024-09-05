import React, {useEffect, useState} from 'react';
import './EditProductPopUp.css';

const EditProductPopUp = ({ isOpen, onClose,getItems, updateItem, itemID}) => {
    const [productName, setProductName] = useState('');
    const [productQuantity, setProductQuantity] = useState(0);
    const [productPrice, setProductPrice] = useState('');
    const [oldItem, setOldItem] = useState({});

    const handleClose = () => {
        setProductName('');
        setProductQuantity(0);
        setProductPrice('');
        onClose()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: oldItem.id,
            name: productName,
            stockStatus: productQuantity >= 10 ?  "em-estoque" : productQuantity == 0 ? "sem-estoque" : "baixo-estoque",
            quantity: productQuantity,
            price: productPrice < oldItem.price ? oldItem.price : productPrice,
            priceNew: productPrice,
            purchaseDate: oldItem.purchaseDate,
            hasDiscount: productPrice < oldItem.price,
        }
        updateItem(oldItem, newItem)
        console.log('Produto Atualizado:', newItem);
        handleClose() // Fecha o popup após o registro
    };

    useEffect(() => {
        if (isOpen){
            const item = getItems().filter((item) => item.id === itemID)[0];
            setOldItem(item);
            setProductName(item.name);
            setProductPrice(item.price);
            setProductQuantity(item.quantity);
        }
    }, [isOpen])

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
                        <button type="button" onClick={handleClose}>Fechar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductPopUp;
