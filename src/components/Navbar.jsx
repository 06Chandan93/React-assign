import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">

        <Link to="/" className="navbar-brand">
          Restraunt List
        </Link>
        <div>
          <Link to="/search" className="btn btn-light ml-auto">
            Seach
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
