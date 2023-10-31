import { ThemeContext } from "./theme-context";
import * as React from "react";
export default class ThemeProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      setColor: this.setColor.bind(this),
      color: "yellow"
    };
  }
  setColor(color) {
    this.setState({ color });
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{
          themeContext: {
            ...this.state
          }
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
