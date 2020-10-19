import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.scss'

export const NavMenu = () => {
    return (
        <div className='navMenu'>
                <NavLink to={'/'}>Головна</NavLink>
                <NavLink to={'/photolist'} >список фото</NavLink>
                <NavLink to={'/bigPhoto'} >окреме фото</NavLink>
        </div>
    )
}
