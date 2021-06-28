import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <A>
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/display">
          <FormattedMessage {...messages.display} />
        </HeaderLink>
        <HeaderLink to="/display/new">
          <FormattedMessage {...messages.new} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
