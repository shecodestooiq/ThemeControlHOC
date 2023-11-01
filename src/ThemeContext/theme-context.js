import * as React from "react";
export const ThemeContext = React.createContext(
  
  {
    themeContext: {
      color: "blue",
      setColor: () => {}
    }
  }
);
