import { useState } from "react";
import moon from "../Assets/moon.gif";
import sun from "../Assets/sun.gif";

const withToggleTheme = (WrappedComponent) => {
  return function WithToggleTheme(props) {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const themeStyle = isLightTheme
      ? { backgroundColor: "white", color: "black" }
      : { backgroundColor: "rgb(36, 42, 85)", color: "white" };
    return (
      <div style={themeStyle} className="container">
        <div className="navContainer">
          <WrappedComponent {...props} />
          <button onClick={() => setIsLightTheme(!isLightTheme)}>
            Toggle Theme
          </button>
        </div>
        <p className="themContainer">
          <img
            src={isLightTheme ? sun : moon}
            alt="moon/sun"
            className={isLightTheme ? "sunImg" : "moonImg"}
          />
          The current theme is: {isLightTheme ? "Light" : "Dark"}
        </p>
      </div>
    );
  };
};

const Home = () => <h2>Dark - Light Mode From Home Component</h2>;
const HomeWithToggleTheme = withToggleTheme(Home);
const ThemeControlHOC = () => {
  return <HomeWithToggleTheme />;
};
export default ThemeControlHOC;
