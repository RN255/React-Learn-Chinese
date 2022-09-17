import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Let's learn Chinese
      </Link>
      <ul>
        <Link to="/lesson">Lesson</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
}
