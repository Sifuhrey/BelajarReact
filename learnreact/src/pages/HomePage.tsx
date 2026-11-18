import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-yellow-300 min-h-lvh flex flex-col items-center justify-center gap-7">
        <section className="bg-yellow-600 p-20 max-lg:my-32 max-w-4/5 rounded shadow-md flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <Link to="/state">
              <HomeCard
                title="State"
                description="State is data a component owns and can update over time. When state changes, React renders the component again. Use state for things that change through interaction, such as a counter value or whether a menu is open."
              />
            </Link>
            <Link to="/props">
              <HomeCard
                title="Props"
                description="Props are read-only values passed to a component. They are used to pass data from a parent component to a child component. Props are immutable, meaning they cannot be changed by the child component."
              />
            </Link>
            <Link to="/form">
              <HomeCard
                title="Form"
                description="Forms are used to collect user input. In React, forms can be controlled or uncontrolled. Controlled forms are managed by React state, while uncontrolled forms are managed by the DOM."
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
