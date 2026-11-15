// client/src/App.jsx (AFTER)

// We import our App.css file to ensure the styles are applied to our component.

import './App.css'
import Card from './Card.tsx'
// This is the main functional component for our application.
// In React, components are functions that return JSX (JavaScript XML).
function App() {
  // The 'return' statement contains the JSX that will be rendered to the DOM.
  // We are returning a single div with an h1 element as a placeholder for our app.
  // This gives us a clean starting point.
  return (
    <main className="bg-yellow-300 h-lvh flex flex-col items-center justify-center">
      <h1>This is a simple React app</h1>
      <section className="bg-yellow-600 p-20 w-3/4 rounded shadow-md  flex flex-row items-center justify-center">
        <Card title="State" description="State is data a component owns and can update over time. When state changes, React renders the component again. Use state for things that change through interaction, such as a counter value or whether a menu is open."/>
        <Card title="Props" description="Props are read-only values passed to a component. They are used to pass data from a parent component to a child component. Props are immutable, meaning they cannot be changed by the child component."/>
        
      </section>
    </main>
  );
}

// We export the App component as the default export from this file.
// This allows it to be imported and used in other files, primarily 'src/main.jsx'.
export default App;