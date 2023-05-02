import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

  const { user, logOut } = useContext(AuthContext)
  // console.log(user?.photoURL);

  const handleLogOut = () => {
    logOut()
  }

  return (
    <div>

      <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center">
            <img title='Thatix Recipe' src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recipes</span>
          </NavLink>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({isActive}) => (isActive ? 'active' : 'default')} aria-current="page">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className={({isActive}) => (isActive ? 'active' : 'default')}>Blog</NavLink>
              </li>
              <li>
                {!user ? <NavLink to="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</NavLink> :
                  <div className='flex items-center'>
                    <img title={user?.displayName} className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                    <button className='ml-2 bg-red-400 px-4 py-1 text-xl text-white rounded-md' onClick={handleLogOut}>Logout</button>
                  </div>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Header;