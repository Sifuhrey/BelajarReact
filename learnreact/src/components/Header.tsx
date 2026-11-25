import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"


function Header() {
  const { pathname } = useLocation();

  let pageTitle = "Page not found";
  const navigate = useNavigate();

  if (pathname === "/") {
    pageTitle = "Home Page";
  } else if (pathname === "/state") {
    pageTitle = "State Page";
  } else if (pathname === "/about") {
    pageTitle = "About Page";
  } else if (pathname === "/props") {
    pageTitle = "Props Page";
  } else if (pathname === "/form") {
    pageTitle = "Form Page";
  } else if (pathname === "/hook") {
    pageTitle = "Hook Page";
  } else if (pathname === "/memo") {
    pageTitle = "Memo Page";
  }

  return (
    <header className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <h1 className="text-2xl">{pageTitle}</h1>

      <nav className="flex gap-4">
        <button onClick={() => navigate(-1)} className="hover:underline font-bold">
          Back
        </button>
        <button onClick={() => navigate(1)} className="hover:underline font-bold">
          Forward
        </button>

        {pathname !== "/" && (
          <Link to="/" aria-label="Home" aria-required="true" className="hover:underline">
            Home
          </Link>
        )}
        {pathname !== "/state" && pathname !== "/" && (
          <Link to="/state" aria-label="State" aria-required="true" className="hover:underline">
            State
          </Link>
        )}
        {pathname !== "/about" && (
          <Link to="/about" aria-label="About" aria-required="true" className="hover:underline">
            About
          </Link>
        )}
        {pathname !== "/props" && pathname !== "/" && (
          <Link to="/props" aria-label="Props" aria-required="true" className="hover:underline">
            Props
          </Link>
        )}
        {pathname !== "/form" && pathname !== "/" && (
          <Link to="/form" aria-label="Form" aria-required="true" className="hover:underline">
            Form
          </Link>
        )}
        {pathname !== "/hook" && pathname !== "/" && (
          <Link to="/hook" aria-label="Hook" aria-required="true" className="hover:underline">
            Hook
          </Link>
        )}
        {pathname !== "/memo" && pathname !== "/" && (
          <Link to="/memo" aria-label="Memo" aria-required="true" className="hover:underline">
            Memo
          </Link>
        )}

      </nav>
    </header>
  );
}

export default Header;
