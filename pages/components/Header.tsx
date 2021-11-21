import React, { useState } from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText } from 'reactstrap';
  // import IconGithub from 'react-devicon/github/original'   
import logo from '../images/logo.png';
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const styles = {
    backgroundColor: '#2d6cdf',
    padding: '0px'
  }


  return (
    <div>
      <Navbar style={styles}  dark expand="md">
        <NavbarBrand href="/">	<Image
        src="/logo.png"
        alt="Picture of the author"
        width={60}
        height={60}
      />
      </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/danielromeo/jackscript-py"><b>GITHUB</b></NavLink>
            </NavItem>


            <UncontrolledDropdown style={{display: 'none'}} nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText> <b>JACKSCRIPT</b> </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
