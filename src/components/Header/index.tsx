import React from 'react';
import Logo from '../../assets/img/breaking-bad-logo.png';

import './styles.css';

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo breaking bad" />
        </header>

    );
}

export default Header;