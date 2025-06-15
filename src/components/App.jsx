import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

// Data awal bisa dihapus atau disimpan jika perlu untuk testing
// const groceryItems = [ ... ];

export default function App() {
  const [items, setItems] = useState([]); // Mulai dengan array kosong

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus semua daftar belanjaan?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app-container">
      <div className="grocery-app">
        <Header />
        <Form onAddItem={handleAddItem} />
        <GroceryList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearItems={handleClearItems}
        />
        <Footer items={items} />
      </div>
    </div>
  );
}
