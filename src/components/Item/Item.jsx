import "./Item.css";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

function Item() {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Bulbasaur</td>
        <td>
          <span className="status in-stock">Em Estoque</span>
        </td>
        <td>20</td>
        <td>10,00 R$</td>
        <td>2024-06-12</td>
        <td>
          <button className="edit-btn">
            <FiEdit3 />
          </button>
          <button className="delete-btn">
            <MdDeleteOutline />
          </button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Charmander</td>
        <td>
          <span className="status in-stock">Em Estoque</span>
        </td>
        <td>18</td>
        <td>10,00 R$</td>
        <td>2024-06-12</td>
        <td>
          <button className="edit-btn">
            <FiEdit3 />
          </button>
          <button className="delete-btn">
            <MdDeleteOutline />
          </button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Squirtle</td>
        <td>
          <span className="status low-stock">Estoque Baixo</span>
        </td>
        <td>8</td>
        <td>10,00 R$</td>
        <td>2024-06-12</td>
        <td>
          <button className="edit-btn">
            <FiEdit3 />
          </button>
          <button className="delete-btn">
            <MdDeleteOutline />
          </button>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Caterpie</td>
        <td>
          <span className="status out-of-stock">Sem Estoque</span>
        </td>
        <td>0</td>
        <td>10,00 R$</td>
        <td>2024-06-12</td>
        <td>
          <button className="edit-btn">
            <FiEdit3 />
          </button>
          <button className="delete-btn">
            <MdDeleteOutline />
          </button>
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>Pikachu</td>
        <td>
          <span className="status low-stock">Estoque Baixo</span>
        </td>
        <td>5</td>
        <td>
          <del>10,00 R$</del> <span className="new-price">&nbsp; 6,00 R$</span>
        </td>
        <td>2024-06-12</td>
        <td>
          <button className="edit-btn">
            <FiEdit3 />
          </button>
          <button className="delete-btn">
            <MdDeleteOutline />
          </button>
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>Onyx</td>
        <td>
          <span className="status low-stock">Estoque Baixo</span>
        </td>
        <td>9</td>
        <td>10,00 R$</td>
        <td>2024-06-12</td>
        <td>
          <button className="edit-btn">
            <FiEdit3 />
          </button>
          <button className="delete-btn">
            <MdDeleteOutline />
          </button>
        </td>
      </tr>
    </>
  );
}

export default Item;
