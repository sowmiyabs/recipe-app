export default function Filters({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <select
      className="border p-2 rounded mb-4"
      value={selectedCategory}
      onChange={e => setSelectedCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map(cat => (
        <option key={cat.strCategory} value={cat.strCategory}>{cat.strCategory}</option>
      ))}
    </select>
  );
}