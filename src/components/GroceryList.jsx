/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

export default function GroceryList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  // PENTING: Membuat salinan array sebelum sorting untuk menghindari mutasi state
  let sortedItems;
  const itemsCopy = [...items];

  if (sortBy === "name") {
    sortedItems = itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "checked") {
    sortedItems = itemsCopy.sort(
      (a, b) => Number(a.checked) - Number(b.checked)
    );
  } else {
    sortedItems = items; // Jika 'input', gunakan urutan asli
  }

  return (
    <div className="list-container">
      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      {items.length > 0 && (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Urutkan: Sesuai Input</option>
            <option value="name">Urutkan: Nama Barang</option>
            <option value="checked">Urutkan: Status Ceklis</option>
          </select>
          <button className="btn-clear" onClick={onClearItems}>
            Bersihkan Daftar
          </button>
        </div>
      )}
    </div>
  );
}
