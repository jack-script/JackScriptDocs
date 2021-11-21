import React from 'react';
import {Navbar,
  NavLink,
  NavItem} from 'reactstrap';

const Footer = () => {

  const styles = {
    backgroundColor: '#2d6cdf',
    padding: '0px'
  }

  return (
    <div >
        {<Navbar style={styles}  dark expand="md">
        <NavItem>
              <NavLink href="https://github.com/danielromeo/jackscript-py"><b>GITHUB</b></NavLink>
            </NavItem>
      </Navbar>}
    </div>
  );
}

export default Footer;


