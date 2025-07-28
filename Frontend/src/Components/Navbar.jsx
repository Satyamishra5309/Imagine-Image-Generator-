import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Home  from '../Pages/Home';
import Explore from '../Pages/Explore';


const Navbar = () => {

  const navigate = useNavigate();

  return (
   <nav className="bg-white  shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
  <h1 className="text-2xl font-bold text-amber-600 dark:text-amber-400">Imagine</h1>
  <div className="flex gap-6 text-lg">
    <NavLink to="/" className="hover:text-amber-600">Home</NavLink>
    <NavLink to="/explore" className="hover:text-amber-600">Explore</NavLink>
  </div>
</nav>

  );
};

export default Navbar;
