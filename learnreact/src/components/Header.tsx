import { Link, useLocation } from "react-router-dom";

const pages = [
  { path: "/", title: "Home Page", label: "Home" },
  { path: "/state", title: "State Page", label: "State" },
  { path: "/about", title: "About Page", label: "About", showOnHome: true },
  { path: "/props", title: "Props Page", label: "Props" },
  { path: "/form", title: "Form Page", label: "Form" },
  { path: "/hook", title: "Hook Page", label: "Hook" },
  { path: "/memo", title: "Memo Page", label: "Memo" },
];

function Header() {
  const { pathname } = useLocation();

  const pageTitle = pages.find((page) => page.path === pathname)?.title ?? "Page not found";

  return (
    <header className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <h1 className="text-2xl">{pageTitle}</h1>

      <nav className="flex gap-4  max-md:items-start max-md:gap-1.5">
        

        {pages
          .filter(
            (page) =>
              page.path !== pathname && (pathname !== "/" || page.showOnHome),
          )
          .map((page) => (
            <Link key={page.path} to={page.path} aria-label={page.label} className="hover:underline max-md:text-sm">
              {page.label}
            </Link>
          ))}
      </nav>
    </header>
  );
}

export default Header;
