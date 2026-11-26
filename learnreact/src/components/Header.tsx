import { Link, useLocation } from "react-router-dom";
import SearchForm from "../features/map/SearchForm";
import useGeocoding from "../features/map/useGeocoding";
import { useMapStore } from "../features/map/mapStore";


const pages = [
  { path: "/", title: "Home Page", label: "Home" },
  { path: "/state", title: "State Page", label: "State" },
  { path: "/about", title: "About Page", label: "About", showOnHome: true },
  { path: "/props", title: "Props Page", label: "Props" },
  { path: "/form", title: "Form Page", label: "Form" },
  { path: "/hook", title: "Hook Page", label: "Hook" },
  { path: "/memo", title: "Memo Page", label: "Memo" },
  { path: "/context", title: "Context Page", label: "Context" },
];

function Header() {
  const { pathname } = useLocation();
  const { searchAddress, loading } = useGeocoding();
  const setResults = useMapStore((state) => state.setResults);

  const pageTitle = pages.find((page) => page.path === pathname)?.title ?? "Page not found";
  const handleSearch = async (query: string) => {
    setResults(await searchAddress(query));
  };
  return (
    <header className="flex items-center justify-between bg-blue-500 p-4 gap-2 text-white">
      <h1 className=" text-lg md:text-2xl">{pageTitle}</h1>
      {pathname === "/hook" && (
        <div className="max-lg:hidden">
          <SearchForm loading={loading} onSearch={handleSearch} />
        </div>
      )}
      <nav className="flex gap-4  max-md:items-start max-md:gap-1.5">
        

        {pages
          .filter(
            (page) =>
              page.path !== pathname && (pathname !== "/" || page.showOnHome),
          )
          .map((page) => (
            <Link key={page.path} to={page.path} aria-label={page.label} className="hover:underline ">
              {page.label}
            </Link>
          ))}
      </nav>
    </header>
  );
}

export default Header;
