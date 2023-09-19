# React Theme Control Higher Order Component (HOC)

Dear students,

In this homework assignment, you will create a Higher Order Component (HOC) in React that controls the theme of all components wrapped within it. This HOC will enable the toggling between dark and light themes without requiring theme-specific code within individual components.

## Task Instructions

Please follow the steps below to complete the task:

### 1. Create the Theme Control HOC

Begin by creating a new React Higher Order Component (HOC) called "ThemeControlHOC." This component will serve as the mechanism for managing and toggling the theme for all components wrapped within it.

### 2. Theme State Management

Inside the "ThemeControlHOC," implement state management for the theme. You can use the React `useState` hook or any state management solution of your choice to control the current theme (e.g., dark or light).

### 3. Toggle Theme Functionality

Create a function within the HOC that allows toggling between the dark and light themes. When this function is called, it should update the theme state and trigger a re-render of all components wrapped within the HOC.

### 4. Wrap Components with the HOC

Select a few components (e.g., header, footer, main content) that you want to apply the theme control to. Wrap these components with the "ThemeControlHOC" so that they inherit the theme management functionality.

### 5. Implement Theme Styles

Define separate styles or CSS classes for the dark and light themes. Ensure that these styles are applied to the components based on the current theme state, which is managed by the HOC.

Feel free to reach out if you have any questions or need further assistance.
