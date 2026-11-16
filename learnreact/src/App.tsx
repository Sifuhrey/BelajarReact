import { Link } from "react-router-dom";
import "./App.css";
import Card from "./Card.tsx";
import Header from "./Header.tsx";

function App() {
  return (
    <>
      <Header />
      <main className="bg-yellow-300 h-lvh flex flex-col items-center justify-center gap-7">
        <h1 className="text-2xl font-bold">
          This web is Fakhri understanding of React
        </h1>
        <section className="bg-yellow-600 p-20 m-10 max-w-4/5 rounded shadow-md flex flex-col items-center justify-center gap-5">
          <div className="flex flex-row items-center justify-center">
            <Link to="/state">
              <Card
                title="State"
                description="State is data a component owns and can update over time. When state changes, React renders the component again. Use state for things that change through interaction, such as a counter value or whether a menu is open."
              />
            </Link>
            <Link to="/props">
              <Card
                title="Props"
                description="Props are read-only values passed to a component. They are used to pass data from a parent component to a child component. Props are immutable, meaning they cannot be changed by the child component."
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
