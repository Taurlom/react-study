import React from 'react';
import { hot } from 'react-hot-loader/root';

const HeaderComponent = () => (
    <header>
        <h1>Hello from Headerr component</h1>
    </header>
);

const Header = hot(HeaderComponent);

export default Header;