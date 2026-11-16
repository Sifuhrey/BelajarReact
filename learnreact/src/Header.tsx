import { Link, useLocation } from "react-router-dom";
import "./App.css";

function Header() {
  const { pathname } = useLocation();

  let pageTitle = "Page not found";

  if (pathname === "/") {
    pageTitle = "Home Page";
  } else if (pathname === "/state") {
    pageTitle = "State Page";
  } else if (pathname === "/props") {
    pageTitle = "Props Page";
  }

  return (
    <header className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <h1 className="text-2xl">{pageTitle}</h1>

      <nav className="flex gap-4">
        {pathname !== "/" && <Link to="/">Home</Link>}
        {pathname !== "/state"&& pathname !== "/" && <Link to="/state">State</Link>}
        {pathname !== "/props"&& pathname !== "/" &&  <Link to="/props">Props</Link>}
      </nav>
    </header>
  );
}

export default Header;