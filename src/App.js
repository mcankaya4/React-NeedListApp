import Logo from "./sections/Logo";
import Form from "./sections/Form";
import PackingList from "./sections/PackingList";
import Stats from "./sections/Stats";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Elma", quantity: 2, packed: false },
  { id: 2, description: "Armut", quantity: 1, packed: true },
];

function App() {
  // Todo: Items dizisi oluşturup, içerisine varsayılan dizi atıyoruz
  const [items, setItems] = useState(initialItems);

  // Todo: Formdan gelen item'ı items dizisine ekliyoruz
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // Todo: Silmek istediğimiz item'i filtreleyip diğer item'ları döndürüyoruz
  // Todo: Böylelikle silme işlemi gerçekleşiyor
  function handleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  // Todo: Items içerisinde eşleşen id'değerinin packed'ını günceller
  function handleToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  // Todo: Items'ın tüm elemanlarını silme
  function handleClearItems() {
    // Todo: Silme işleminde onay alma durumu
    const confirmed = window.confirm(
      "Tüm liste elemanlarını silmek istediğinize emin misiniz?",
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
