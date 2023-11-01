import * as React from "react";
import { withTheme } from "./ThemeContext/withTheme";

const SetColor = props => (
  <div>
    <button onClick={() => props.themeContext.setColor("red")}>Red</button>
    <button onClick={() => props.themeContext.setColor("lightblue")}>
      Blue
    </button>
  </div>
);
export default withTheme(SetColor);
