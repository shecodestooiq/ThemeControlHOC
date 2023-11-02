import React, { useState } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md"
import './style.css'

const withToggleTheme = (WrappedComponent) => {
    return function withToggleTheme(prpos) {
        const [lightTheme, setLigthTheme] = useState(true);
        return (
            <div className={`container ${lightTheme ? "lightTheme" : "darkTheme"
                }`}
            >
                <div className='floatImg'>
                    {lightTheme ? <MdLightMode /> : <MdDarkMode />}
                </div>
                <p className='p fs-20 fw-7'>
                    <WrappedComponent {...prpos} />
                    {lightTheme ? "Ligth" : "Dark"}
                </p>
                <button
                    onClick={() => setLigthTheme(!lightTheme)}
                    className='fs-15 flex flex-c'
                >
                    change it to
                    {lightTheme ? <MdDarkMode /> : <MdLightMode />}
                </button>

            </div>
        );
    };
};



export default withToggleTheme;
