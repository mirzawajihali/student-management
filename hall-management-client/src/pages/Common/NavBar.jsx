import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {

  const {user, logout} = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu-2");
    menu.classList.toggle("hidden");
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <div>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            RUET Student Hub
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

        {
          user ? <div className='flex gap-3 items-center'>
            <h3 className='text-sm text-white font-semibold'>{user.displayName || user.email }</h3>
            <button className='btn' onClick={logout}>Logout</button></div> 
          
          : <div className='flex gap-3'>
         
          <Link to='/login'><button className="btn">Login</button></Link>
          <Link to='/register'><button className="btn">Register</button></Link>
        </div>
        }
         <button
      data-collapse-toggle="mobile-menu-2"
      type="button"
      className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="mobile-menu-2"
      aria-expanded={isMenuOpen}
      onClick={toggleMenu}
    >
      <span className="sr-only">Open main menu</span>
      {/* Menu Icon */}
      <svg
        className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
      {/* Close Icon */}
      <svg
        className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
        </div>
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
          <NavLink
            to="/"
            className={ ({ isActive }) =>
              isActive ? 'block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 ' : 'block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 '
            
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            className={ ({ isActive }) =>
              isActive ? 'block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 ' : 'block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 '
            
            }
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/token"
            className={ ({ isActive }) =>
              isActive ? 'block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 ' : 'block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 '
            
            }
          >
            Token
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={ ({ isActive }) =>
              isActive ? 'block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 ' : 'block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 '
            
            }
          >
            Contact
          </NavLink>
        </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default NavBar;