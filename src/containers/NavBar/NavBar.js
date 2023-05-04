import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import appRoutes from '../../shared/appRoutes';
import Logo from '../../assets/imgs/imgs2/logo.png';
import cart from '../../assets/imgs/imgs2/cart.png';
import './NavBar.css';
import { cartCount } from '../../containers/CharactersPage/CharacterPage/CharacterPage';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

      <Navbar expand='md'>

        <NavbarBrand tag={RouterNavLink} to={appRoutes.home} className='logo'>
          <img src={Logo} alt='logo' style={{ width: '256px' }} />
        </NavbarBrand>
        
        <h2 className='top'>Scotty Shirts U Illustrate (SSUI)</h2>

        <NavItem className='item'>
          <NavLink tag={RouterNavLink} to={appRoutes.cart} exact>
            <img src={cart} alt='cart' style={{ width: '128px' }}  className='cart'/>
            <span>{cartCount > 0 ? cartCount : '尚未選擇任何物件'}</span>
          </NavLink>
        </NavItem>

      </Navbar>

ㄖ

      <Navbar color='danger' dark expand='md'>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className='me-auto' navbar>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.home} exact>
                Home
              </NavLink>
            </NavItem>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.home} exact>
                T-Shirts
              </NavLink>
            </NavItem>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.movies}>
                Hoodies
              </NavLink>
            </NavItem>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.characters}>
                Create your own
              </NavLink>
            </NavItem>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.characters}>
                About us
              </NavLink>
            </NavItem>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.characters}>
                Your account
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>

      </Navbar>
    </div>
  );
};

export default NavBar;
