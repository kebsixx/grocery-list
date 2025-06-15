/* eslint-disable react/prop-types */
export default function Footer({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats empty">
        <p>Yuk, mulai tambahkan daftar belanjaanmu!</p>
      </footer>
    );
  }

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentage =
    totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}></div>
      </div>
      <p>
        {percentage === 100
          ? "Selamat! Semua barang sudah dibeli! 🎉"
          : `Ada ${totalItems} barang di daftar, ${checkedItems} sudah diceklis (${percentage}%)`}
      </p>
    </footer>
  );
}
