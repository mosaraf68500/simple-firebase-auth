import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav>
            <ul className='flex w-1/3 mx-auto justify-around items-center text-2xl font-bold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
               
            </ul>
        </nav>
    );
};

export default Navbar;