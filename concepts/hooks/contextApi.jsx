// The Context API is a feature introduced in React that provides a way to pass data through the component tree without having to pass props down manually at every level. It's particularly useful for passing down global data or theme information that many components in your application need access to.
// Here's how you can use the Context API:
// Create a Context: First, you create a context using the React.createContext() function. This creates a Context object with a Provider and a Consumer.
// Provide Data: Wrap the part of your component tree where you want to make the context available with a Provider component. This provider component takes a value prop, which is the data you want to make available to the consuming components.
// Consume Data: Use the Consumer component or the useContext hook to consume the data from the context.


// ThemeContext.js
import React from 'react';

// Create a context with a default value (optional)
const ThemeContext = React.createContext('light');

export default ThemeContext;



// App.js
import React from 'react';
import ThemeContext from './ThemeContext';
import Toolbar from './Toolbar';

const App = () => {
  // Providing the context value
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default App;



// Toolbar.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Toolbar = () => {
  // Consuming the context value using useContext hook
  const theme = useContext(ThemeContext);

  return <div>Theme: {theme}</div>;
};

export default Toolbar;
