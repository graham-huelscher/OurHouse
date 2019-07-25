import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (

    <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
            <NavLink to="/">
                <img alt="Brand" src="../../house-64.ico" width="30" height="30" className="d-inline-block align-top" />
            </NavLink>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Other
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                    <button className="btn btn-outline-info" type="submit">Login</button>
            </div>
            </div>
    </nav>
        )
        
export default NavBar