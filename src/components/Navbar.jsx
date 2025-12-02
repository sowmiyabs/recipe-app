import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-500 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl items-center ">Recipe App</Link>
      <Link to="/favorites" className="font-semibold items-center">Favorites</Link>
    </nav>
  );
}