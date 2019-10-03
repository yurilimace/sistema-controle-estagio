import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Header Component Here</h1>
            <div>
                <NavLink to="/" exact={true} activeClassName="is-active">Go Home</NavLink><br />
                <NavLink to="/contact" activeClassName="is-active">Go Contact</NavLink><br />
                <NavLink to="/help" activeClassName="is-active">Go Help</NavLink>
            </div>
        </header>
    );

}

export default Header;
