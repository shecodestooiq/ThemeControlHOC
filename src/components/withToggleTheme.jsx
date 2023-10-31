// withToggleTheme.js
import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import "./Style.css";

const withToggleTheme = (WrappedComponent) => {
	return function WithToggleTheme(props) {
		const [lightTheme, setLightTheme] = useState(true);

		return (
			<div
				className={`container ${
					lightTheme ? "lightTheme" : "darkTheme"
				}`}
			>
				<div className='floatImg'>
					{lightTheme ? <MdLightMode /> : <MdDarkMode />}
				</div>
				<p className='p fs-20 fw-7'>
					<WrappedComponent {...props} />
					{lightTheme ? "Light" : "Dark"}
				</p>
				<button
					onClick={() => setLightTheme(!lightTheme)}
					className='fs-15 flex flex-c'
				>
					Change it to
					{lightTheme ? <MdDarkMode /> : <MdLightMode />}
				</button>
			</div>
		);
	};
};

export default withToggleTheme;
