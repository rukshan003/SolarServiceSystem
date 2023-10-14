import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Our Projects</h1>
        </Link>
        <Link to="/form">
          <p>New job(temporary)</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
