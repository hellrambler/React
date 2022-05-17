import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <NavLink className={({ isActive }) => (isActive ? " Navbar-active" : "")} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? " Navbar-active" : "")} to="/chips">Chips</NavLink>
                <NavLink className={({ isActive }) => (isActive ? " Navbar-active" : "")} to="/sardines">Sardines</NavLink>
                <NavLink className={({ isActive }) => (isActive ? " Navbar-active" : "")} to="/soda">Soda</NavLink>
            </div>
        );
    }
}

export default Navbar;