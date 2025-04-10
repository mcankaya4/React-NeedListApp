import { useState } from "react";

function Form({ onAddItem }) {
  // Todo: Form içerisinde input verilerini yönetecek state'ler
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // Todo: Desc boş işe işlem yapılmasın.
    if (!description) return;

    // Todo: Eklenecek yeni item nesnesini oluşturuyoruz.
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    // Todo: App içerisinde tanımlı olan fonksiyonu çalıştırıyoruz.
    onAddItem(newItem);

    // Todo: Verileri varsayılana çekiyoruz
    setDescription("");
    setQuantity(1);
  }

  return (
    // Todo: onSubmit kullandık çünkü enter tuşuna basınca da verilerin iletilmesini
    //  istiyoruz.
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>🔖Alışveriş sepetine ürün ekleyebilirsin.</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {/* Todo: 1'den 20'ye array oluştur ve map ile option oluştur. */}
        {Array.from({ length: 20 }).map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ürün adı..."
      />
      <button>Ekle</button>
    </form>
  );
}

export default Form;
