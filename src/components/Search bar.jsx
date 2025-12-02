export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className=" w-full p-3 border border-gray-300 rounded-l focus:outline-none focus:ring- focus:ring-green-400 focus:border-transparen  transition placeholder-gray-400
        "
      />
    </div>
  );
}