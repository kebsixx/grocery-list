/* eslint-disable react/prop-types */
import { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);

    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Mau belanja apa hari ini?</h3>
      <div className="form-controls">
        <div className="quantity-control">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
            -
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={() => setQuantity((q) => q + 1)}>
            +
          </button>
        </div>
        <input
          type="text"
          placeholder="Nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn-add" type="submit">
          <HiPlusCircle size={24} />
          <span>Tambah</span>
        </button>
      </div>
    </form>
  );
}
