import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex flex-row gap-10 text-primary font-bold text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allFlags">All Flags</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
