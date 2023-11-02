import React from 'react'
import withToggleTheme from './withToggleTheme';

const HocHeader = () => (
    <nav>
        <h3>theme with HOC</h3>
    </nav>
);
const ThemeHeadweContent = withToggleTheme(() => (
    <h1>Hello All</h1>
));
const Header = () => {
    return (
        <div>
            <HocHeader />
            <ThemeHeadweContent />
        </div>
    );
};

export default Header;
