function Stats({ items }) {
  // Todo: Toplam item sayısı
  const totalItems = items.length;

  // Todo: Itemların packed oranı
  const packedPercentage = Math.round(
    (items.filter((item) => item.packed).length / items.length) * 100,
  );

  return (
    <footer className="stats">
      <em>
        {totalItems === 0
          ? "Hadi ürün eklemeye başla"
          : packedPercentage === 100
            ? "Ürünlerin tamamını aldınız."
            : `💸Alınacak ürün sayısı ${totalItems}, tamamlanma oranı (
      ${packedPercentage}%).`}
      </em>
    </footer>
  );
}

export default Stats;
