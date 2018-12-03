import * as React from 'react';
import {NavLink} from 'react-router-dom';
import headerLogo from '../../images/logo-header.svg';

class NavMenu extends React.Component {
    public render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                    <a className="navbar-brand mr-sm-4" href="#">
                        <img
                            src={headerLogo}
                            width="170"
                            height="40"
                            className="d-inline-block align-top"
                            alt=""/></a>
                    <button
                        className="navbar-toggler hidden-lg-up"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-between align-items-center w-100"
                        id="collapsibleNavId">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" activeClassName="active">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/recipes" className="nav-link" activeClassName="active">Recetas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" activeClassName="active">Con&oacute;cenos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" activeClassName="active">Contacto</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Buscar"/>
                            <button className="btn my-2 my-sm-0" type="submit">
                                <span className="oi oi-magnifying-glass"/>
                            </button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavMenu;