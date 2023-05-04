import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import appRoutes from '../../shared/appRoutes';
import Logo from '../../assets/imgs/star-wars-logo.png';
import './Footer.css';
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

const Footer = () => {
  return (
    <Container className='Footer'>
      <div className='FooterContainer'>
        <div className='ButtonContainer'>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.home} exact>
               Contact Us 
              </NavLink>
            </NavItem>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.home} exact>
                <p>Site Map</p>
              </NavLink>
            </NavItem>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.home} exact>
              Privacy Policy
              </NavLink>
            </NavItem>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.home} exact>
              Careers
              </NavLink>
            </NavItem>

            <NavItem className='item'>
              <NavLink tag={RouterNavLink} to={appRoutes.home} exact>
              Reviews
              </NavLink>
            </NavItem>

            <p className='item'> design by 李</p>
            
        </div>
      </div>
    </Container>
  );
};

export default Footer;
