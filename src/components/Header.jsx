import React from "react";
import withToggleTheme from "./withToggleTheme";
import "./Style.css";

const StandardHeader = () => (
	<nav>
		<h3>Theme with HOC</h3>
	</nav>
);
const ThemedHeaderContent = withToggleTheme(() => (
	<h1>Welcome to My Website</h1>
));

const Header = () => {
	return (
		<div>
			<StandardHeader />

			<ThemedHeaderContent />
		</div>
	);
};

export default Header;
