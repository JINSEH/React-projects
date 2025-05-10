import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
      <button>Get started</button>
    </div>
  );
}
