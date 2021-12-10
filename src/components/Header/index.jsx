import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from '../Contact';
import style from './style.module.scss';
import senaLogo from '../../assets/icons/sena.png';
import senaramaLogo from '../../assets/icons/senarama.png';
import facebookLogo from '../../assets/icons/facebook.png';
import instagramLogo from '../../assets/icons/instagram.png';
import twitterLogo from '../../assets/icons/twitter.png';
import youtubeLogo from '../../assets/icons/youtube.png';
import useScroll from '../../hooks/useScroll';

const Header = ({
  isAuthenticated,
  home,
  title,
  login,
}) => {
  const [showContact, setShowContact] = useState(false);
  const showContactModal = () => setShowContact(true);
  const scroll = useScroll();
  return (
    <header className={style.header}>
      <Navbar
        className={`${style.navbar} ${scroll || !home ? style.nav_active : ''}`}
        sticky
        expand="lg"
        variant="dark"
      >
        <Container
          fluid="lg"
          className={style.nav_container}
        >
          <Navbar.Brand
            href="https://www.sena.edu.co/es-co/Paginas/default.aspx"
          >
            <img
              className={style.logo_link}
              src={senaLogo}
              alt="SENA Logo"
            />
          </Navbar.Brand>
          <Link to="/">
            <img
              className={style.logo_link}
              src={senaramaLogo}
              alt="SENARAMA Logo"
            />
          </Link>
          {
            !home
              ? (
                <div className={style.nav_title}>
                  <h1>{title}</h1>
                </div>
              )
              : ''
          }
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav className={style.nav_menu} navbarScroll>
              <Link className={style.nav_link} to="/home">Inicio</Link>
              {
                home
                  ? (
                    <div>
                      <Link className={style.nav_link} to="/projects">Proyectos</Link>
                      <Link className={style.nav_link} to="/senarautas">Senarautas</Link>
                      <Link className={style.nav_link} to="/billboard">Cartelera</Link>
                    </div>
                  )
                  : ''
              }
              <button
                className={style.nav_link}
                type="button"
                onClick={showContactModal}
              >
                Contacto
              </button>
              <div className={style.social_networks}>
                <NavDropdown title="REDES">
                  <NavDropdown.Item
                    href="https://facebook.com"
                  >
                    <img src={facebookLogo} alt="Facebook" />
                    Facebook
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://facebook.com"
                  >
                    <img src={twitterLogo} alt="Twitter" />
                    Twitter
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://facebook.com"
                  >
                    <img src={instagramLogo} alt="Instagram" />
                    Instagram
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://facebook.com"
                  >
                    <img src={youtubeLogo} alt="YouTube" />
                    YouTube
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
            <Nav className={style.nav_social} navbarScroll>
              <div className={style.auth_opts}>
                {
                  isAuthenticated
                    ? (
                      <div>
                        <button className={style.logout} type="button">
                          Cerrar sesión
                        </button>
                      </div>
                    )
                    : (
                      <div>
                        <Link
                          className={style.login}
                          to={`${login ? '/signup' : '/login'}`}
                        >
                          {!login ? 'Iniciar sesión' : 'Registrase'}
                        </Link>
                      </div>
                    )
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Contact show={showContact} setShow={setShowContact} />
    </header>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  home: PropTypes.bool,
  title: PropTypes.string,
  login: PropTypes.bool,
};

Header.defaultProps = {
  isAuthenticated: false,
  home: true,
  title: 'SENARAMA',
  login: false,
};

export default Header;
