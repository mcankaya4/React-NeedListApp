import { useState } from "react";

function PackingList({ items, onRemoveItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  // Todo: input ise orjinal sırayı göster
  if (sortBy === "input") {
    sortedItems = items;
  }
  // Todo: desc ise alfabetik olarak sırala
  // Todo: slice() kullanınca orjinal items'a etki etmez.
  if (sortBy === "desc") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  // Todo: packed'ın tamamlanma durumuna göre sırala
  // Todo: slice() kullanınca orjinal items'a etki etmez.
  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => b.packed - a.packed);
  }

  return (
    <div className="list">
      <ul>
        {/* Todo: Sıralanan Items içerisindeki eleman sayısı kadar 'Item' oluştur. */}
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Kayıt sırasına göre sırala</option>
          <option value="desc">Açıklamaya göre sırala</option>
          <option value="packed">Tamamlanma durumuna göre sırala</option>
        </select>
        <button onClick={onClearItems}>Listeyi temizle</button>
      </div>
    </div>
  );
}

function Item({ item, onRemoveItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={item.packed ? "packed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}

export default PackingList;
