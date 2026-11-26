
import PageLayout from "../components/PageLayout";
import Map from "../features/map/Map";
import useGeocoding  from "../features/map/useGeocoding";
import { ErrorBoundary,getErrorMessage } from "react-error-boundary";
import SearchResult from "../features/map/SearchResult";
import { useMapStore } from "../features/map/mapStore";
import SearchForm from "../features/map/SearchForm";



function HookPage() {
  const location = useMapStore((state) => state.location);
  const { searchAddress, loading } = useGeocoding();
  const setResults = useMapStore((state) => state.setResults);

  const handleSearch = async (query: string) => {
    setResults(await searchAddress(query));
  };
  

  return (
    <PageLayout>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div role="alert">
            <p>Something went wrong:</p>
            <pre>{getErrorMessage(error)}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
          </div>
        )}
        onError={(error, info) => {
          console.error("ErrorBoundary caught an error", error, info);
        }}
        >
          <div className="lg:hidden">
          <SearchForm loading={loading} onSearch={handleSearch} />
          </div>
        <SearchResult />
        <Map location={location} />
      </ErrorBoundary>
        
    </PageLayout>
  )
}

export default HookPage
