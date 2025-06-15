/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className={`item ${item.checked ? "checked" : ""}`}>
      <div className="item-info">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggleItem(item.id)}
        />
        <span className="item-quantity">{item.quantity}x</span>
        <span className="item-name">{item.name}</span>
      </div>
      <button className="btn-delete" onClick={() => onDeleteItem(item.id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
