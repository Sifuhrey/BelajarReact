import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import PageLayout from "../components/PageLayout";

function HomePage() {
  return (
    <>
      <PageLayout>
        <section className="bg-blue-400 p-4 max-lg:my-32 mx-12 rounded shadow-md flex flex-col items-center justify-center ">
          <div className="flex flex-col lg:flex-row w-full items-stretch justify-center">
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
            <Link to="/hook">
              <HomeCard title="Custom Hooks" description="Custom hooks are reusable functions that let you share stateful logic between React components. They can use built-in hooks like `useState` and `useEffect`, and their names conventionally start with `use`." />
            </Link>
            <Link to="/memo">
              <HomeCard title="Memoization" description="In React, `useMemo` is a Hook that caches the result of a calculation between renders. React reuses that value while its dependencies stay the same, and recalculates it when one changes. This can help avoid repeating expensive work, but for simple calculations the extra memoization usually isn’t needed. memoize values and prevent unnecessary re-renders." />
            </Link>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

export default HomePage;
