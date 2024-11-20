import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
import headerLogo from '../assets/img/logo.svg';

import bandera from '/./src/assets/img/es.svg'

function Header() {
  return (
    <>

      <div className="header-container w-100 d-none d-sm-block">
        <header className="container d-flex align-items-center justify-content-between">
          <Link to="/"><img src={headerLogo} /></Link>
          <nav>
            <ul className="menu-pc d-flex">
              <li><Link className="menu-enlace" to="/">Inicio</Link></li>
              <li><Link className="menu-enlace" to="/conciertos">Conciertos</Link></li>
              <li><Link className="menu-enlace" to="/discordia">Discordia</Link></li>
              <li><Link className="menu-enlace" to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
          <div className="language-container d-flex align-items-center">
            <img src={bandera} />
            <p>ES</p>
          </div>
        </header>
      </div>

      <div className="header-container d-md-none d-sm-block w-100 caja-menu-movil">
        <Navbar expand="lg"  >

          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Brand href="/"> <img src={headerLogo} /></Navbar.Brand>
          <div className="language-container d-flex align-items-center">
            <img src={bandera} />
            <p>ES</p>
          </div>
          <Navbar.Collapse className="bg-light" id="basic-navbar-nav ">
            <Nav className="me-auto menu menu-movil">
            <Nav.Link as={Link} to="/">INICIO</Nav.Link>
                <Nav.Link as={Link} to="/conciertos">Conciertos</Nav.Link>
                <Nav.Link as={Link} to="/discordia">Discordia</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    </>
  );
}

export { Header };



/*function Header() {
    return (
        <div className="header-container w-100">
            <header className="container d-flex align-items-center justify-content-between">
                <img src="./src/assets/img/logo.svg" />
                <nav>
                    <ul className="menu d-none d-lg-flex">
                        <li><a className="menu-enlace" to='/inicio'> Inicio</a></li>
                        <li><a className="menu-enlace" to='/conciertos'>Conciertos</a></li>
                        <li><a className="menu-enlace" to='/discordia'>Discordia</a></li>
                        <li><a className="menu-enlace" to='/contacto'>Contacto</a></li>
                    </ul>
                </nav>
                <div className="language-container d-flex align-items-center">
                    <img src="./src/assets/img/es.svg" />
                    <p>ES</p>
                </div>
            </header>
        </div>
    )
}

export { Header }*/
