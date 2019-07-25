import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (

    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <NavLink to="/">
                <img alt="Brand" src="../../house-64.ico" width="30" height="30" class="d-inline-block align-top" />
            </NavLink>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <NavLink class="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link" to="/">
                            Other
                        </NavLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                    <button class="btn btn-outline-info" type="submit">Login</button>
            </div>
            </div>
    </nav>
        )
        
export default NavBar