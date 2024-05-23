import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="mb-4">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/watchlist">Watchlist</Link>
    </nav>
  );
};

export default Navbar;
