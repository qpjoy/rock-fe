import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import './Travel.scss'

export default function Travel() {
  const [items, setItems] = useState([]);

  function handleAddItems(item: any) {
    setItems((items: any): any => [...items, item]);
  }

  function handleDeleteItem(id: any) {
    setItems((items) => items.filter((item:any):any => item.id !== id));
  }

  function handleToggleItem(id: any) {
    setItems((items: any) =>
      items.map((item: any) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
